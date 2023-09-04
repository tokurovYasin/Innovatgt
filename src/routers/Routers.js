import React from "react";
import { Routes, Route, Navigate, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddNewBook from "../pages/AddNewBook";
import AboutBook from "../components/AboutBook";
import AuthRootComponent from "../pages/Auth";
import UserPage from "../pages/UserPage";
import Filter from "../components/Filter/Filter";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../components/ForgotPassword";
import BookList from "../components/BookList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<AuthRootComponent />} />
        <Route path="/login" element={<AuthRootComponent/>}/>
        <Route path="/add-book" element={<AddNewBook/>}/>
        <Route path="/about-Book" element={<AboutBook/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
        <Route path="/filter" element={<Filter/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/all-books" element={<BookList/>}/>
        <Route path="/filter" element={<Filter/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default Routers;
