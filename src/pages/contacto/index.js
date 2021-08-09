import React from 'react';
import DefaultLayout from "../../layouts";
import ContactQuery from "../../utils/queries/ContactQuery";
import '../../styles/pages/contact.scss'

const ProjectPage = () => {
   const {graphCmsPage: page, allGraphCmsContactInfo: contact } = ContactQuery()

   return (
      <DefaultLayout page={"contact"}>
         <div className="container is-max-desktop">
            <section className="section">
               <h1 className={"title"}>{page.title}</h1>
               <h2 className={"subtitle"}>{page.subtitle}</h2>
            </section>
            <form className="section">
               <div className="columns">
                  <div className="column is-8">
                     <div className="columns">
                        <div className="column">
                           <label htmlFor={"name"} className={"label"}>Nombre</label>
                           <input id={"name"} className="input" type="text" placeholder="Cómo quieres que te llame" />
                        </div>
                        <div className="column">
                           <label htmlFor={"email"} className={"label"}>E-mail</label>
                           <input id={"email"} className="input" type="text" placeholder="Tu e-mail" />
                        </div>
                     </div>
                     <div className="columns">
                        <div className="column">
                           <label htmlFor={"messege"} className={"label"}>Mensaje</label>
                           <textarea id={"messege"} className="textarea" placeholder="Escribe el mensaje que quieres enviarme"></textarea>
                        </div>
                     </div>
                     <div className="columns">
                        <div className="column" align="right">
                           <input className="button" type="submit" value="Enviar"/>
                        </div>
                     </div>
                  </div>
                  <section className="column is-offset-1 is-narrow contact-info">
                     {contact && contact.nodes.map((element, index) => (
                        <article key={index} className={"contact-info__item"}>
                           <h3><strong>{element.title}</strong></h3>
                           <p>{element.content}</p>
                        </article>
                     ))}
                  </section>
               </div>
            </form>
         </div>
      </DefaultLayout>
)
};

export default ProjectPage;
