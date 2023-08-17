import React from 'react';
import Routers from "../../routers/Routers";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
    return (
        <>
            <Header/>
          <Routers/>
           <Footer/>
        </>
    );
};

export default Layout;