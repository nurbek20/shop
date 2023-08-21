import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import { category } from '../category';

const Main = () => {
    console.log(category)
  return (
    <div>
      <Header category={category} />
      <Container>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Container>
    </div>
  );
};

export default Main;
