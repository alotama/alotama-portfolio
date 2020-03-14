/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, url, thumbnail, isPage, isBlogPost }) => {
  const data = useStaticQuery(graphql`
    query SiteSetting {
      ghostSettings {
        title
        twitter
        url
        description
        lang
      }
    }
  `)

  const settings = data.ghostSettings;
  
  const getPageTitle = (context) => {
    if (context) {
      return `${title} | Sebastián A. Tamashiro – Desarrollador Front-End`
    } else if (isBlogPost) {
      return `${title} | Sebastián A. Tamashiro`
    } else {
      return `${settings.title} | Sebastián A. Tamashiro – Desarrollador Front-End`
    }
  }

  const pageTitle = getPageTitle(isPage);
  const pageDescription = description || settings.description
  const pageURL = url || settings.url
  const pageThumbnail = thumbnail || null
  
  return (
    <Helmet>
      {/* General tags */}
      <html lang={settings.lang}/>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {pageThumbnail && <meta name="image" content={pageThumbnail} />}
      <link rel="canonical" href={pageURL} />
      <meta name="robots" content="index, follow" />

      {/* OpenGraph tags */}
      <meta property="og:url" content={pageURL} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {pageThumbnail && <meta property="og:image" content={pageThumbnail} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={settings.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {pageThumbnail && <meta name="twitter:image" content={pageThumbnail} />}
    </Helmet>
  )
}

SEO.propTypes = {
  title:PropTypes.string,
  description:PropTypes.string,
  url: PropTypes.string,
  thumbnail: PropTypes.string,
  isBlogPost:PropTypes.bool,
  isPage:PropTypes.bool
}

SEO.defaultProps = {
  title:'',
  description: '',
  thumbnail:'',
  url:process.env.SITE_URL,
  isBlogPost: false,
  isPage: false
};

export default SEO
