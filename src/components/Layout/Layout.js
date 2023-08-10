import React from 'react';
import Routers from "../../routers/Routers";
import Header from "../Header";

const Layout = () => {
    return (
        <>
            <Header/>
          <Routers/>
            footer
        </>
    );
};

export default Layout;