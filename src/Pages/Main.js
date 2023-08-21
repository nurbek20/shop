import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import { category } from '../category';
import product from "../data/products.json"

const Main = () => {
    console.log(product)
    const [data, setData]=useState(product.products)
    console.log(data)
  return (
    <div>
      <Header category={category} />
      <Container>
        <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Container>
    </div>
  );
};

export default Main;
