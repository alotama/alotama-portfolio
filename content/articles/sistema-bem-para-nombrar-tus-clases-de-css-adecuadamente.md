---
title: 'Sistema BEM para nombrar tus clases de CSS adecuadamente'
excerpt: 'Estructura tu código CSS de forma limpia, semánticamente y realmente reutilizable sin tener conflictos en el futuro.'
coverImage: '/articles/bem/featured-image.png'
date: '10 mayo 2021'
duration: '10 minutos de lectura'
ogImage: '/articles/bem/ogImage.png'
thumbnail: '/articles/bem/thumbnail.png'
featured: '/articles/bem/featured-image.png'
---
En la mayoría de los proyectos, el CSS es algo a lo que casi nadie le da importancia. Cada desarrollador tiene su forma de escribir. Algunos son más específicos, otro más ambiguos, o le ponen nombre al alzar.

Esto es una deuda técnica a largo plazo y empieza a ser realmente un problema cuando el proyecto necesitan crear variantes al diseño original y/o en los casos que la performance de algo esencial.

¿Cuál es la manera más optima de nombrar una clase de CSS? ¿Cómo hacer los nombres de clases de CSS de forma semántica? ¿Cómo perder menos tiempo al pensar el nombre de una clase de CSS?

Para solucionar todas estas preguntas existen diferentes metodologías. Algunos incluyen soluciones nativas de CSS y otras son más complejas e involucran javascript de por medio. En esta oportunidad nos enfocaremos en una **solución nativa de CSS llamada BEM**.

## Sistema BEM (Bloque, Elementos, Modificadores)

El sistema BEM es principalmente una metodología que crear una convención a la hora de nombrar clases de CSS. Esto es útil para los desarrolladores front-end que tienen entender qué relación hay entre el HTML y el CSS en el proyecto.

### ¿Qué es un bloque?

Un Bloque es principalmente el contexto en el que se encuentra. Así como en HTML tenemos las etiquetas semánticas cómo `<header>`, `<nav>`, `<footer>` o `<aside>`, por nombrar algunos, debemos darle un nombre representativo que, con solo leer la clase, ya nos de una idea de a dónde esta afectando.

### ¿Qué es un elemento?

El elemento se trata de la parte que estamos modificando del bloque anteriormente mencionado. Por ejemplo, dentro de un `<nav>`, cada link a otra sección del sitio sería un elemento.

### ¿Qué es un modificador?

Un modificador puede ser cualquier alteración que se haga sobre el elemento. Estas modificaciones pueden ser de color, tamaño, posición, lo que sea.

## Implementación del Sistema BEM

Como este sistema se trata de una solución nativa de CSS, la forma en que se escriben las clases es muy importante. Los bloques y elementos se separan entre sí con doble guión bajo `(bloque__elemento)`. Los elementos y modificadores se separan con doble guión medio `(elemento--modificador)`. A continuación más ejemplos:
### Header

![oak-1](/articles/bem/oak-1.png)

```html
  <header class="header">
    <section class="header__container">
      <div class="header__section header__section--left">
        <article class="header__logo header__logo--default">Logo</article>
      </div>
      <div class="header__section header__section--right">
        <nav class="nav header__nav">
          <a class="nav__item nav__item--active" href="/home">
            Home
          </a>
          <a class="nav__item" href="/nosotros">
            nosotros
          </a>
          <a class="nav__item" href="/contacto">
            contacto
          </a>
        </nav>
      </div>
    </section>
  </header>
```

Pasemos a explicar el por qué de cada nombre:

1. **header**: Este es un bloque porque es el elemento **padre** que contextualiza a todos sus elementos de HTML hijos.
2. **header__container**: Este es un elemento **hijo del header** y tiene la función de atrapar a los otros dos elementos que conforman al elemento header.
3. **header__section**: Es un elemento **hijo del header** y tiene la función de darle los mismos estilos a los dos `<div>` en lo que esta siendo usado.
4. **header__section--left**: Es una modificación del header__section y su función es ubicar a ese elemento a la izquierda de la pantalla.
5. **header__section--right:** Es una modificación del header__section y su función es ubicar a ese elemento a la derecha de la pantalla.
6. **header__logo**: Es un elemento hijo del header y tiene la función de darle estilos básicos al logo de nuestra página.
7. **header__logo--default**: Es una modificación de header__logo y simplemente indica que tiene los estilos por default.
8. **header__nav**: Este es un hijo del header y tiene la función de darle todos los estilos necesarios para ubicar ese nav dentro del header.
9. **nav**: Es un bloque porque representa un elemento totalmente diferente al header. Todos los estilos que se escriban dentro de este contexto van a servir para mostrar correctamente la barra de navegación.
10. **nav__item**: Es un elemento hijo del nav y tiene la función de darle los estilos necesarios a cada item dentro del la barra de navegación.
11. **nav__item--active**: Basándose en los estilos previos de nav__item, nada más le agrega un estilo que le indica al usuario en dónde se encuentra dentro del sitio web.

## Conclusión

Esta es la teoría y la forma en la que el sistema BEM fue pensado para funcionar. Como se mencionó al principio, hay muchas otras metodologías que buscan resolver este mismos problemas. Además, aclarar que cada uno puede hacer su propia implementación que se adecue al proyecto en el que se este trabajando.

Lo único que tienen que tener en cuenta es que debe ser posible implementar el mismo bloque de HTML copiando la maqueta y el CSS e implementarlo en otro lugar simplemente copiando y pegándolo. Si el todo bloque de HTML y CSS se comporta de la misma forma que en el anterior lugar, entonces se esta usando este sistema a la perfección.