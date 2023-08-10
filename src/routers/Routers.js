import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddNewBook from "../pages/AddNewBook";
import AboutBook from "../components/AboutBook";
import AuthRootComponent from "../pages/Auth";

const Routers = () => {
    return (
        <Routes >
            <Route path='/' element={<Navigate to={'/home'}/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/register' element={<AuthRootComponent/>}/>
            <Route path='/login' element={<AuthRootComponent/>}/>
            <Route path='/add-book' element={<AddNewBook/>}/>
            <Route path='/aboutBook' element={<AboutBook/>}/>
        </Routes>
    );
};

export default Routers;