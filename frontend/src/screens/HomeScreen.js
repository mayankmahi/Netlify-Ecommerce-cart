import React from "react";
import "./HomeScreen.css";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <h2 className="homescreen__title">Latest Produtcs</h2>

      <div className="homescreen__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HomeScreen;
