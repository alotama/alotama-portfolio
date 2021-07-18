import React from 'react';
import {Link} from "gatsby";
import Logo from "./logo";

const Header = ({navbar}) => (
   <header className={"navbar is-fixed-top"}>
      <div className={"container is-max-desktop"}>
         <nav className="navbar-row" role="navigation" aria-label="main navigation">
            <figure className={"navbar-brand"}>
               <div className="navbar-item">
                  <Link to={'/'}>
                     <Logo/>
                  </Link>
               </div>
            </figure>
            <div className={"navbar-menu"}>
               <div className="navbar-end">
                  {navbar && navbar.nodes.map((item, index) => (
                     <Link
                        to={`/${item.slug}`}
                        key={`${item.page}-${index}`}
                        className={"navbar-item"}
                        activeClassName="active"
                     >
                        {item.page}
                     </Link>
                  ))}
               </div>
            </div>
         </nav>
      </div>
   </header>
);

export default Header;
