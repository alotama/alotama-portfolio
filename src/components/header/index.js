import React from 'react';
import {Link} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

const Header = ({logo, navbar}) => (
   <nav className="navbar" role="navigation" aria-label="main navigation">
      <figure className={"navbar-brand"}>
         {logo && (
            <Link to={'/'}>
               <GatsbyImage alt={logo.altText} image={logo.localFile.childImageSharp.gatsbyImageData} />
            </Link>
         )}
      </figure>
      <div className={"navbar-menu"}>
         <div className="navbar-end">
         {navbar && navbar.nodes.map((item, index) => (
            <Link to={item.slug} key={`${item.page}-${index}`} className={"navbar-item"}>
               {item.page}
            </Link>
         ))}
         </div>
      </div>
   </nav>
);

export default Header;
