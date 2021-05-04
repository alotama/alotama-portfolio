import React from 'react'
import Button from '../../components/button'
import Layout from '../../components/layout'
import ArticleCluster from '../../components/articleCluster'

const ArticlesPage = () => {
  return (
    <Layout>
      <section>
        <article>
          <div>
            <h2>Última publicación</h2>
          </div>
          <div>
            <small>15 de Abril 2021 – 7 minutos de lectura</small>
            <h1>Sistema BEM para nombrar tus clases de CSS adecuadamente</h1>
            <p>Estructura tu código CSS de forma limpia, semánticamente y realmente reutilizable sin tener conflictos en el futuro</p>
          </div>
          <Button>Leer artículo</Button>
        </article>
      </section>
      <section>
        <h3>Todos los artículos</h3>
        <ArticleCluster />
        <ArticleCluster />
        <ArticleCluster />
        <ArticleCluster />
        <ArticleCluster />
        <ArticleCluster />
      </section>
    </Layout>
  )
}

export default ArticlesPage
