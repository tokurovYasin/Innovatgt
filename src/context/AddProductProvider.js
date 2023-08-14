import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers";

export const AddProduct = createContext("");
export const useProduct = () => useContext(AddProduct);

const INIT_STATE = {
  products: [],
  oneProduct: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 10),
      };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const AddProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState(null);
  const createProduct = async (formData) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/apartments/`, formData, config);
      console.log(res);
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response.data).flat()[0]);
    }
  };
  //! ==================================================GET PRODUCTS=====================================================================================
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `${API}/apartments/${window.location.search}`
      );
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  // ! ================================================DELETE=======================================================================================
  const deleteProduct = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.delete(`${API}/apartments/${id}/`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  //! ======================================================GET ONE PRODUCT=================================================================================
  const getOneProduct = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.get(`${API}/apartments/${id}/`, config);
      dispatch({ type: "GET_ONE_PRODUCT", payload: res.data });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  //! =======================================================UPDATE PRODUCT================================================================================
  const updateProduct = async (id, editedProduct) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.patch(`${API}/apartments/${id}/`, editedProduct, config);
      navigate("/products");
      console.log("works");
    } catch (error) {
      console.log(error);
    }
  };
  //! =======================================================================================================================================
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value == "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search.toString()}`;

    navigate(url);
  };
  //! =======================================================================================================================================

  const values = {
    setError,
    error,
    products: state.products,
    oneProduct: state.oneProduct,
    pages: state.pages,
    createProduct,
    getProducts,
    deleteProduct,
    getOneProduct,
    updateProduct,
    fetchByParams,
  };
  return <AddProduct.Provider value={values}>{children}</AddProduct.Provider>;
};

export default AddProductProvider;
