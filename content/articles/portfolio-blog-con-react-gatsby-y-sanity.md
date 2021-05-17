---
title: 'Crear tu propio blog utilizando React, Gatsby.js y markdown'
excerpt: 'Construí de forma sencilla un sitio web con la ayuda de React, Gatsby.js y markdown para escribir y administrar el contenido.'
coverImage: '/articles/express/express-featured-image.png'
date: '09 julio 2019'
duration: '10 minutos de lectura'
ogImage: '/articles/gatsby/ogImage.png'
thumbnail: '/articles/gatsby/thumbnail.png'
featured: '/articles/gatsby/featured-image.png'
---

## Introducción

Éste artículo pertenece a una serie en la que cuento mi experiencia creando una API con GraphQL para obtener las estadísticas finales de todos los campeones del juego Raid: Shadow Legends. En este, cuento cómo es que hice para obtener los datos de los campeones, scrapeando la información de un blog llamado [Raid-Codex](https://raid-codex.com/). 

Utilicé Puppeteer.js para hacer ésta tarea pero hay otras librerías, como [Selenium](https://selenium.dev/documentation/en/), [Cheerio](https://cheerio.js.org/) o [Nightmare](http://www.nightmarejs.org/).

## ¿Qué es Puppeteer.js?

Puppeteer.js es una librería que nos permite **automatizar procesos** utilizando el motor de navegación Chromium. Ésta herramienta simula la navegación en un sitio web y realiza una serie de acciones que le vamos a declarar.

En nuestro caso, lo que vamos a querer hacer con esta librería es:

1. Entrar en una URL donde estén todos los campeones.
2. Hacer click en un campeón de la lista para entrar en su página.
3. Copiar los campos: nombre, vida, ataque, defensa, probabilidad de crítico, velocidad, daño crítico, resistencia, rareza, facción, tipo y elemento. 
4. Guardar esa información en una variable.
5. Volver a la página anterior y repetir el proceso con el siguiente campeón.
6. Enviar el resultado anterior a MongoDB.

Y todo esto lo vamos a poder hacer en menos de 150 líneas de código.  :^) 

## Requisitos

Para poder empezar a recolectar información de forma automatizada utilizando Puppeteer.js vamos a necesitar tener instalado NPM y Node.js en nuestras máquinas. Para verificar si tenemos ambos instalados, nada más debemos abrir nuestra terminal y escribir:

```bash
node -v
```

En el caso de tenerlo instalado debería mostrar algo como lo siguiente:

```jsx
node -v
v.12.14.3
```

Y para verificar si tenemos instalados npm, usamos:

```bash
npm -v
```

En el caso de tenerlo instalado se puede observar lo siguiente:

```bash
6.13.4
```

En el caso de no tener instalado alguno de los dos, nada más debemos ir a la página de [Node.js e instalar la última versión LTS](https://nodejs.org/en/), que ya nos incluye también la última versión de NPM.

## Configuraciones iniciales

Una vez que ya verificamos que tenemos instalado NPM y Node.js, abrimos la terminal y allí escribimos:

```jsx
mkdir scrapping && cd scrapping && npm init -y && npm install express mongoose puppeteer
```

Lo que hicimos con esta linea de comando es crear una carpeta llamada **scrapping.** Entramos en esa carpeta, inicializamos un proyecto de NPM e instalamos `express`, `mongoose` y `puppeteer`. **Éste proceso puede llegar a tardar un poco.** Una vez terminada esta tarea, no cierren la terminal.

### Express.js

Es un framework para Node.js que nos va a permitir, dentro de muchas más cosas, declarar qué va a pasar cuando entremos en una URL. En nuestro caso, lo que queremos es que cuando entremos en nuestra aplicación con "/scrapping", se ejecute Puppeteer.js

### Puppeteer.js

Como vimos más arriba, con Puppeteer.js vamos a lanzar a nuestro robot, que va abrir un navegador y hacer lo que nosotros le digamos que haga. 

### Mongoose

Ésta librería nos va a permitir conectarnos a una base de datos llamado MongoDB y enviar la información que vamos a recolectar con nuestro robot.

Terminada la instalación de estas dependencias, vamos a seguir configurando el entorno. En la terminal, escribimos:

```jsx
touch index.js
```

Esto, lo que va a hacer, es crear un archivo llamado `index.js`

Ahora pasamos el proyecto a nuestro IDE favorito, en mi caso es el [Visual Studio Code](https://code.visualstudio.com/). Abrimos el archivo llamado `package.json` y vamos a ver algo como esto:

```json
{
  "name": "scrapping",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.8.11",
    "puppeteer": "^2.1.0"
  }
}
```

Este es el archivo que creó el comando `npm init -y`. De aquí, vamos agregar la siguiente linea `"dev": "node index.js"` dentro de `"scripts"`. Nos debería quedar así:

```json
{
  "name": "scrapping",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
++  "dev": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.8.11",
    "puppeteer": "^2.1.0"
  }
}
```

Lo que hace la linea que agregamos es incluir un comando que nos va a permitir iniciar el proyecto en un entorno de desarrollo en nuestras máquinas.

Ahora abrimos el archivo `index.js`, anteriormente creado, y agregamos el siguiente código:

```jsx
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hola mundo!'))

app.listen(port, () => console.log(`App de ejemplo escuchando el puerto ${port}!`))
```

Ya podemos correr nuestra aplicación para checkear que todo esté bien. Para hacer esto, en nuestra terminal lanzamos el comando:

```jsx
npm run dev
```

Si todo está en orden, vamos a ver el siguiente mensaje en la terminal **"App de ejemplo escuchando el puerto 3000!"**. Ahora solo nos queda entrar en [http://localhost:3000/](http://localhost:3000/) y vamos a ver nuestro "Hola mundo!".

Una vez terminada esta pequeña configuración estamos listos para empezar a programar nuestro scrapeador.

## Scrapeando información de campeones de Raid: Shadow Legends

Hasta ahora, no le dimos uso a nuestro robot que creamos previamente. Eso es porque todavía no lo llamamos. Para hacer eso debemos agregar las siguientes líneas en el archivo `index.js`, junto al resto de requires.

```jsx
const puppeteer = require("puppeteer");
```

Esta linea lo que hace es solicitar la dependencia Puppeteer y la guarda en una variable constante con el mismo nombre.

Lo siguiente que debemos hacer es declarar una URL a la que vamos a acceder cada vez que querramos ejecutar nuestro scrapeador. Para eso agregamos el siguiente extracto de código:

```jsx
app.get("/scrapping", function (req, res) {
  res.send('Estamos listos para empezar');
})
```

### Entrando a una URL

En este punto ya estamos en condiciones de empezar a darle las instrucciones a nuestro robot scrapeador. Lo primero que necesitamos es saber a dónde vamos a mandarlo. En nuestro caso, la URL a donde lo enviaremos es la siguiente: [Raid-Codex](https://raid-codex.com/champions/). 

¿Por qué elegí esta? Porque es un listado de campeones y facilita mucho el trabajo al poder iterar sobre este listado uno por uno hasta llegar al final.

Entrar en la página se traduce en código de la siguiente forma:

```jsx
app.get("/scrapping", function (req, res) {
	let scrape = async () => {
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		await page.setViewport({ width: 1920, height: 1080 });
		await page.goto("https://raid-codex.com/champions/#!?filter=e30%3D", [
      1000,
      { waitUntil: "domcontentloaded" }
    ]);
	}

	scrape()
})
```

Este pequeño extracto de código lo que hace es crear una función asíncrona llamada `scrape`. Dentro de esta función lanzamos al robot con una pequeña configuración `{ headless: false }`, lo que hace es abrirnos un navegador para que podamos ver que es lo que va haciendo (ésto es muy útil para el momento de desarrollo, luego se puede quitar). Luego lo guardamos dentro de una variable constante llamada `browser`.

**Es importante** que configuremos la vista que va a tener nuestro robot en 1920x1080 porque necesita tener visible todo lo que hay en la página para poder ejecutar las instrucciones que le demos. 

A continuación, le decimos al `browser` que abra una nueva página y que lo guarde en una variable constante llamada `page`. Y por fin, hacemos que en esa nueva página el robot vaya hasta la URL que le señalamos. La configuración extra, lo que hace, es esperar 1000ms (1 segundo) y que todo el contenido de la página se termine de cargar.

Y con la última línea, lo único que hacemos es ejecutar la función que antes creamos.

Para poder ver el proceso lo que debemos hacer es, en la consola, tumbar el servicio. Para eso apretamos la combinación `CMD + C`, en el caso de que usemos mac, o `Ctrl + C`, en el caso de que estemos usando Windows, volvemos a ejecutar el comando `npm run dev` y entramos en [http://localhost:3000/scrapping](http://localhost:3000/scrapping). Esto lo debemos hacer cada vez que hagamos un cambio y lo queramos ver reflejado en el robot.

**Función asíncrona y await's**
Una función asíncrona, en pocas palabras, es una función que nos promete que nos va a devolver algo en algún momento. Y los await's, lo que hacen es decirle a la función que los espere para seguir a la siguiente linea.

## Haciendo click a un campeón.

Indicarle al robot que queremos que haga click es fácil. Solo debemos asegurarnos de que el elemento que queremos que haga click existe en la página, que haga click en el elemento que le dijimos y espere hasta que la siguiente página termine de cargar. Esto en código de traduce en lo siguiente:

```jsx
let elementToClick = '<Selector>'
await page.waitForSelector(elementToClick);
  
await Promise.all([
  page.click(elementToClick),
  page.waitForNavigation({ waitUntil: 'networkidle2' }),
])
```

Para poder indicarle al robot que queremos que haga click en un lugar en específico debemos nosotros abrir la página que vamos a scrapear y abrir el inspector del navegador.

En nuestro caso, entramos en Raid-Codex, y con el selector de elementos clickeamos la imagen de un campeón. Se nos va a sombrear un sector del HTML y a eso le tenemos que hacer click derecho → Copiar → Copiar selector. Logrado ya esto, reemplazamos `'<Selector>'` por lo que acabamos de copiar. A tener en cuenta que lo que asignamos a la variable mutable `elementToClick` debe ser un String. 

![scrapping-1](/articles/express/scrapping-1.png)

Quizás te preguntes, ¿Por qué verificamos que lo que queremos hacer click existe? Porque quizás el elemento por alguna razón no se renderizó en la página, el robot no lo va a encontrar y al no saber que hacer en ese caso va a romper la aplicación.

### Scrapeando la información de un campeón

¡Bien! Ya casi estamos listos. Solo nos queda darle la instrucción a nuestro robot que queremos que una vez dentro de la página del campeón copie los siguientes campos: nombre, vida, ataque, defensa, probabilidad de crítico, daño crítico, velocidad, resistencia, rareza, facción, tipo y elemento. 

Para hacer esto, creamos una variable constante llamada `result` y le asignamos una función que le va a avisar al robot que dentro de esa página vamos a querer que haga algo. 

```jsx
const result = await page.evaluate(() => {
	//Acá adentro va lo que queremos que haga
}
```

Lo que queremos que haga a continuación es que dentro de la página encuentre el lugar donde se encuentra la información que necesitamos y que la guarde. Para hacer esto nos fiamos de la técnica que aprendimos en el paso anterior. Copiamos el selector. Pero ahora, no necesitamos al selector. Necesitamos el contenido. Esto se puede lograr utilizando una funcion propias de javascript, `document.querySelector('Selector').innerText`. Aplicando esto para conseguir el texto del selector del nombre quedaría:

```jsx
let name = document.querySelector("body > main > div > div.col-12.text-center.mb-3 > h1").innerHTML;
```

Y repetimos lo mismo para el resto de campos que estamos buscando. Una vez hecho esto, el robot necesita guardar todos esos campos en algún lado. Para eso creamos una variable constante que se llame `championModel` y le asignamos un formato tipo JSON al que le pasamos las variables de información scrapeada. Por ejemplo:

```jsx
let championModel = {
  name: name,
  rarity: rarity,
  faction: faction,
  type: type,
  element: element,
  stats: {
    health: health,
    attack: attack,
    defense: defense,
    criticalRate: criticalRate,
    criticalDamage: criticalDamage,
    speed: speed,
    resistance: resistance,
    accuracy: accuracy
  }
}
```

Una vez hecho esto podemos hacer un `console.log(championModel)` y nos debería quedar así

```jsx
{
  name: 'Raglin',
  rarity: 'Legendary',
  faction: 'Banner-Lords',
  type: 'Assist',
  element: 'Void',
  stats: {
    health: '20310',
    attack: '1156',
    defense: '1068',
    criticalRate: '15%',
    criticalDamage: '50%',
    speed: '104',
    resistance: '50',
    accuracy: '0'
  }
}
```

¡Perfecto! Ya lo tenemos. Entonces, ahora solo nos queda hacer que esta función en la que estuvimos trabajando, `result` devuelta esto que acabamos de hacer. Esto es tan facil como colocar esta última linea al final de la función.

```jsx
return championModel 
```

Ya sabemos entonces como hacer para obtener la información de un solo campeón. Ahora lo que nos queda es hacer esto mismo pero para todos los campeones de la lista.

### Scrapear información en loop

Ya sabemos entonces como hacer para obtener la información de un solo campeón. Ahora lo que nos queda es hacer esto mismo pero para todos los campeones de la lista de la página anterior. 

Lo que necesitamos hacer ahora es decirle a nuestro robot que queremos que vuelva una página atrás y que ejecute todo lo que estuvimos haciendo hasta el momento hasta que termine con todos los campeones de la lista. Para hacer esto, simplemente agregamos la siguiente línea fuera de lo que hicimos.

```jsx
await page.goBack([5000, { waitUntil: "domcontentloaded" }]);
```

Ahora, vamos a vamos hasta arriba hasta que encontramos la siguiente línea:

```jsx
await page.goto("https://raid-codex.com/champions/#!?filter=e30%3D", [...]);
```

Debajo de esta tenemos que crear dos variables constantes . Una llamada `parentRow` y otra llamada `totalChampions`. 

Para el primero, volvemos a abrir la página que estamos scrapeando y buscamos con el inspector el `<div>` padre de la variable que creamos anteriormente `elementToClick`, copiamos el selector y se lo asignamos. 

Luego, para el segundo nos valemos de una función de puppeteer que nos permite realizar una función dentro del navegador del robot. Con esta función lo que hacemos es contar todos los elementos hijos de este padre, que son todos los campeones de esa lista.

```jsx
const parentRow = "body > main > champion-list > div";
await page.waitForSelector(parentRow);
const totalChampions = await page.$eval(parentRow, el => el.childElementCount);
```

Con estas dos variables ya creadas y funcionando, pasemos a crear propiamente el loop que nos va a permitir conseguir la información de todos los campeones de la lista.

Para hacer esto vamos a crear una variable mutable llamada `championList` y le asignamos un objeto vacío. A su vez utilizamos la función `for()`, le asignamos decimos que se ejecute ese loop hasta que el número de iteraciones sea igual o mayor al de `totalChampions`. Movemos lo que tenemos hasta ahora dentro. 

**Importante:** Debemos cambiar el valor de la variable `elementToClick`, porque hasta este momento siempre que se ejecutaba el código iba y buscaba un solo campeón. Ahora, gracias a que tenemos el número de iteraciones del loop podemos reemplazar el número del elemento hijo del `parentRow` que queremos que clickee.

Arriba de la parte que hace que el robot vaya para la página anterior, hacemos que el resultado que sale de `result` se agregue al objeto `championList` con la función `push()`. Nos debería quedar algo así:

```jsx
let championList = [];
for (var i = 1; i <= totalChampions; i++) {
	let elementToClick = `body > main > champion-list > div > div:nth-child(${i}) > div > div > div:nth-child(1) > a > picture > img`;
  await page.waitForSelector(elementToClick);
  
  await Promise.all([
    page.click(elementToClick),
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
  ])

  const result = await page.evaluate(() => {...})
	championList.push(result);
	await page.goBack([5000, { waitUntil: "domcontentloaded" }]);
}
```

Con esto ya logramos que nuestro robot scrapee la información de todos los campeones de la lista. Pero, nos falta hacer que al ejecutar la función que creamos al comienzo de todo llamada `scrape()` nos devuelta lo que estuvo haciendo. Y, no nos tenemos que olvidar de hacer que nuestro robot se vaya a descansar después de todo el trabajo que le pedimos que haga. Para lograr esto, agregamos lo siguiente por fuera de la función `for()`. 

```jsx
browser.close();
return championList;
```

## Guardar la información en MongoDB

Excelente. Ya sabemos como navegar y scrapear información con puppeteer.js. El problema con el que nos encontramos ahora es que esa información que conseguimos, solamente va a estar disponible mientras no tumbemos el proyecto.

Es por esto que ahora vamos a aprender a conectarnos a una base de datos llamado MongoDB. Para eso vamos a utilizar un servicio gratuito que nos ofrece [MongoDB Atlas](https://www.mongodb.com/download-center). Para hacer esto, simplemente nos registramos. Seguimos los pasos hasta el final.

![scrapping-2](/articles/express/scrapping-2.png)

Ya registrados, vamos a crear un cluster con el nombre que querramos. Una vez ya creado vamos a ver un panel parecido al que esta abajo. Le damos al botón de `connect` y a continuación nos va a abrir un modal en el que debemos clickear en la opción de **Connect your application.**

![scrapping-3](/articles/express/scrapping-3.png)

En el siguiente paso, nos aseguramos de que este seleccionado **Node.js** como driver y **3.0 or later** en la versión. Luego, verificamos que la opción este en la pestaña de **Connection string only,** le damos al botón Copy y lo cerramos.

![scrapping-4](/articles/express/scrapping-4.png)

Volvemos a nuestro IDE y agregamos dos nuevas variables constantes al comienzo del código. Lo que van a hacer la primera variable va a ser invocar a una librería que nos va a permitir comunicarnos con nuestro cluster para poder enviarle la información. Y en la segunda debemos pegar el acceso que copiamos en la página de MongoDB, debe quedar como un string.

```jsx
const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://<MongoDB>';
```

 Hecho esto, ahora lo que hacemos es conectarnos propiamente a la base de datos. Para hacer esto, nada más copiamos y pegamos el pedazo de código de abajo. Esto lo que va hacer es mandarnos un mensaje en la consola, tanto si nos pudimos conectar satisfactoriamente, como si no.

```jsx
mongoose.connect(mongoUrl, { useNewUrlParser: true });
var db = mongoose.connection;

!db ? console.log("Hubo un error conectandose a la base de datos") : console.log("Conexión a base de datos satisfactoria");
```

Para terminar, lo último que debemos hacer es decirle a nuestro robot que luego de hacer el scrapeo de la página, le envíe la información a MongoDB. Para hacer eso, primero lo que debemos hacer es crear un nuevo archivo llamado `championModel.js`, que va a contener el modelo de información que va a esperar recibir.

```jsx
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var championSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rarity: {
    type: String,
  },
  faction: {
    type: String,
  },
  type: {
    type: String,
  },
  element: {
    type: String,
  },
  stats: {
    health: {
      type: String,
      required: true
    },
    attack: {
      type: String,
      required: true
    },
    defense: {
      type: String,
      required: true
    },
    criticalRate: {
      type: String,
      required: true
    },
    criticalDamage: {
      type: String,
      required: true
    },
    speed: {
      type: String,
      required: true
    },
    resistance: {
      type: String,
      required: true
    },
    accuracy: {
      type: String,
      required: true
    },
  }
});

module.exports = Champion = mongoose.model('champions', championSchema);
```

Hacemos el llamado de este modelo de la siguiente forma en `index.js`.

```jsx
const Champion = require("./championModel")
```

Ahora solo nos queda hacer que al terminar de scrapear, el mande esa información a MongoDB utilizando el modelo que acabamos de crear. Eso lo hacemos de la siguiente forma:

```jsx
scrape().then(value => {    
		Champion.create(value, function (err, small) {
			if (err) return handleError(err);
			// saved!
		});
		res.send(value);
		return;
	});
```

## Conclusión

¡Felicidades! Ya sabes lo básico para utilizar la librería puppeteer.js para scrapear información. Sabes cómo decirle a la librería que quieres entrar en una página, a que haga click, que recolecte un poco de información, que vaya para la página anterior que repita el proceso hasta finalizar con  todos los campeones de la página. No solamente sabes darle instrucción, sino que también sabes como hacer para conectarte a un MongoDB y enviarle la información obtenida. 

Ya a partir de acá podes seguir jugando con la librería. Te dejo el link a la documentación de todas las herramientas que estuvimos utilizando por si te interesa seguir profundizandos, y un link a mi repositorio de este proyecto.

[**Repositorio en GitHub**](https://github.com/alotama/scrapping-rsl/tree/master)

## **Documentación**

[Puppeteer.js](https://pptr.dev/)

[MongoDB](https://docs.mongodb.com/)

[Mongoose.js](https://mongoosejs.com/docs/guide.html)