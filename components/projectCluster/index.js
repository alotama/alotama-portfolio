import React from 'react'
import Image from 'next/image'

const ProjectCluster = ({featured, title, subtitle, imageSrc, workType}) => {
  return (
    <section>
      <article>
        <div>
          {featured && <span>Proyecto destacado</span>}
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <ul>
          {workType && workType.map((element, index) => (
            <li key={`${element}-${index}`}>{element}</li>
          ))}
        </ul>
      </article>
      <figure>
        <Image
          alt={title}
          src={imageSrc}
          layout="responsive"
          width={672}
          height={448}
        />
        <figcaption>Ver proyecto</figcaption>
      </figure>
    </section>
  )
}

export default ProjectCluster
