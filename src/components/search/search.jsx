import React, { useEffect, useState } from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, IconButton } from "@mui/material";
import { useProduct } from "../../context/AddProductProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContextProvider";
import { getCountProductsInCart } from "../../helpers";

const blockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (castom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: castom * 0.3 },
  }),
};
// =============

const search = () => {
  const { getProducts, fetchByParams } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const { addProductToCart } = useCart();

  // ================================================

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  // ===============================================

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  // ===============================================

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  // ===============================================

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        style={{ overflow: "hidden", width: "100%", height: "100%" }}
        className="searchsarcontainer"
      >
        <div className="searchBar" style={{ width: "100%", height: "100%" }}>
          <Badge className="iconShop" badgeContent={count} color="primary">
            <IconButton onClick={() => navigate("/cart")}>
              <AddShoppingCartIcon sx={{ color: "white" }} color="primary" />
            </IconButton>
          </Badge>

          <IconButton>
            <SearchIcon sx={{ color: "white" }} />
            <input
              placeholder="Поиск"
              className="searchBarInp"
              type="text"
              onChange={(e) => fetchByParams("search", e.target.value)}
            />
          </IconButton>

          <motion.button variants={blockAnimation}>Фильтр</motion.button>

          <input type="date" onChange={(e) => console.log(e.target.value)} />
          <input type="date" />
        </div>
      </motion.div>
    </>
  );
};

export default search;
