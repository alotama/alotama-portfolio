import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import LogoQuery from "../utils/queries/LogoQuery";
import 'bulma/css/bulma.min.css';

const DefaultLayout = ({children}) => {
   const {graphCmsAsset: logo, allGraphCmsPage: navbar} = LogoQuery()
   return (
      <>
         <Header
            logo={logo}
            navbar={navbar}
         />
         <main className={"main"}>
            {children}
         </main>
         <Footer/>
      </>
   )
};

export default DefaultLayout;
