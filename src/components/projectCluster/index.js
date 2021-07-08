import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {Link} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const ProjectCluster = ({ featured, compact, title, slug, subtitle, imageSrc, altText, workType }) => {
    return (
        <Link to={slug}>
            <section className={"projectCluster"}>
                <article className={"projectCluster__projectInfo"}>
                    <div>
                        {featured && <span className="projectCluster--featured">Proyecto destacado</span>}
                        <h2 className="projectInfo__title">{title}</h2>
                        <h3 className="projectInfo__subtitle">{subtitle}</h3>
                    </div>
                    <ul className="projectInfo__workType">
                        {workType && workType.map((element, index) => (
                            <li key={`${element.name}-${index}`}>{element.name}</li>
                        ))}
                    </ul>
                </article>
            </section>
            <figure>
                <GatsbyImage alt={altText} image={imageSrc} />
            </figure>
        </Link>
    )
}

export default ProjectCluster
