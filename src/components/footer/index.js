import React from 'react';

const Footer = ({social}) => (
   <footer className={"footer"}>
      <div className={"container is-max-desktop"}>
         <div className="columns">
            <div className="column">
               <span>Copyright 2021</span>
            </div>
            <div className="column has-text-right">
               <ul className={"footer__socialLinks"}>
                  {social && social.nodes.map((element, index) => (
                     <li key={`${element.name}-${index}`}><a href={element.url}>{element.name}</a></li>
                  ))}
                  <li><a href={'mailto:sebastian@alotama.com'}>Email</a></li>
               </ul>
            </div>
         </div>
      </div>
   </footer>
);

export default Footer;
