// import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// pages
import Home from "./components/Home";
import Navigation from "./components/NavComp/Navigation";
import ProductList from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="router-wrapper">
      <Router>
        {/* <Link to="/" className="home-nav">
        </Link> */}
        <Navigation />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          {/* down here to add another component */}
          {/* <Route path="/Products" exact element={<ProductList />} /> */}
          <Route path="/Products/:Id" exact element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
