/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const SEO = props => {
  const { lenguage, title, description, meta, link } = props
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

  const settings = data.ghostSettings

  return (
    <Fragment>
      <Helmet
        htmlAttributes={settings.lang}
        title={title}
        titleTemplate={`%s | ${settings.title}`}
        link={[].concat(link)}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:locale`,
            content: "es_ES",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:description`,
            content: settings.description,
          },
          {
            name: `twitter:title`,
            content: settings.autor,
          },
          {
            name: "twitter:site",
            content: settings.twitterProfile,
          },
        ].concat(meta)}
      />
    </Fragment>
  )
}

SEO.defaultProps = {
  lenguage: "es",
  title: "",
  description: "",
  meta: [],
  link: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lenguage: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
