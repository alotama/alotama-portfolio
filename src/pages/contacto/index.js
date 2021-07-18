import React from 'react';
import DefaultLayout from "../../layouts";
import {Link} from "gatsby";
import ContactQuery from "../../utils/queries/ContactQuery";

const ProjectPage = (props) => {
   const {graphCmsPage: page, allGraphCmsContactInfo: contact } = ContactQuery()

   return (
      <DefaultLayout page={"project"}>
         <div className="container is-max-desktop">
            <section className="section">
               <h1 className={"title"}>{page.title}</h1>
               <h2 className={"subtitle"}>{page.subtitle}</h2>
            </section>
            <section className="section">
               <div className="columns">
                  <div className="column">
                     <div className="columns">
                        <div className="column">
                           <label className={"label"}>Nombre</label>
                           <input className="input" type="text" placeholder="Text input" />
                        </div>
                        <div className="column">
                           <label className={"label"}>E-mail</label>
                           <input className="input" type="text" placeholder="Text input" />
                        </div>
                     </div>
                     <div className="columns">
                        <div className="column">
                           <label className={"label"}>Mensaje</label>
                           <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
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
            </section>
         </div>
      </DefaultLayout>
)
};

export default ProjectPage;
