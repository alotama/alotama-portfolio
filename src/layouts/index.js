import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import HeaderQuery from "../utils/queries/HeaderQuery";
import {Helmet} from "react-helmet";
import '../styles/styles.scss'
import FooterQuery from "../utils/queries/FooterQuery";

const DefaultLayout = ({page, children}) => {
   const {allGraphCmsPage: navbar} = HeaderQuery()
   const {allGraphCmsSocialMedia: footer} = FooterQuery()
   return (
      <>
         <Header
            navbar={navbar}
         />
         <main id={page}>
         {children}
         </main>
         <Footer social={footer}/>
      </>
   )
};

export default DefaultLayout;
