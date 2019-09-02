import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Highlight from "react-highlight"
import "highlight.js/styles/vs.css"

const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
}

const serializers = {
  types: {
    code: props => (
      <Highlight className={props.node.language}>{props.node.code}</Highlight>
    ),
    figure: props => (
      <Img
        fluid={getFluidGatsbyImage(
          props.node.asset._ref,
          { maxWidth: 1024 },
          sanityConfig
        )}
      />
    ),
    blockCallout: props => (
      <figure className={"blockCallout_container"}>{props.node.callout}</figure>
    ),
  },
  marks: {
    link: props => (
      <a
        href={props.mark.href}
        rel={props.mark.linkRel ? props.mark.linkRel : "follow"}
        title={props.mark.title}
        target={props.mark.linkBlank ? props.mark.linkBlank : "_self"}
      >
        {props.children}
      </a>
    ),
  },
}

const BodyContent = ({ blocks }) => (
  <BlockContent blocks={blocks} serializers={serializers} />
)

export default BodyContent
