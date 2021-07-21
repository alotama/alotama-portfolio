import React from 'react';
import DefaultLayout from "../../layouts";
import ContactQuery from "../../utils/queries/ContactQuery";

const ProjectPage = () => {
   const {graphCmsPage: page, allGraphCmsContactInfo: contact } = ContactQuery()

   return (
      <DefaultLayout page={"project"}>
         <div className="container is-max-desktop">
            <section className="section">
               <h1 className={"title"}>{page.title}</h1>
               <h2 className={"subtitle"}>{page.subtitle}</h2>
            </section>
            <form className="section">
               <div className="columns">
                  <div className="column">
                     <div className="columns">
                        <div className="column">
                           <label htmlFor={"name"} className={"label"}>Nombre</label>
                           <input id={"name"} className="input" type="text" placeholder="Text input" />
                        </div>
                        <div className="column">
                           <label htmlFor={"email"} className={"label"}>E-mail</label>
                           <input id={"email"} className="input" type="text" placeholder="Text input" />
                        </div>
                     </div>
                     <div className="columns">
                        <div className="column">
                           <label htmlFor={"messege"} className={"label"}>Mensaje</label>
                           <textarea id={"messege"} className="textarea" placeholder="e.g. Hello world"></textarea>
                        </div>
                     </div>
                  </div>
                  <section className="column">
                     {contact && contact.nodes.map((element, index) => (
                        <article key={index}>
                           <h3>{element.title}</h3>
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
