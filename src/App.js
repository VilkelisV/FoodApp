import React, { useEffect, useState } from "react";
import items from "./data/foodData";
import Categories from "./Categories";
import Menu from "./components/food/Menu";
import About from "./About";
import Contact from "./Contact";
import Cart from "./components/checkout/Cart";
import FoodInfo from "./components/food/FoodInfo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { foodPopulate } from "./state/actions";
import Navbar from "./components/navbar/Navbar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(foodPopulate(items));
  });

  return (
    <Router>
      <Navbar />

      {/* <div>
        <button onClick={() => dispatch(decrement())}>- </button>
      </div> */}
      <Routes>
        <Route exact path="/" element={<Categories />}></Route>
        <Route path="/menu" element={<Categories />} />
        <Route path="/menu/:category" element={<Menu />} />
        <Route path="/menu/:category/food-info/:id" element={<FoodInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
