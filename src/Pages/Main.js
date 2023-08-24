import React, { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import { category } from "../category";
import product from "../data/products.json";

const Main = () => {
  const [data, setData] = useState(product.products);
  const [title, setTitle] = useState("Главное");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("shop")) ||[]);
  const [input, setInput]=useState("")

  useEffect(()=>{
    localStorage.setItem("shop", JSON.stringify(cart))
  },[cart])

  //? Для филтирация категория
  const categoryClick = (text) => {
    const newList = product.products.filter((elem) => elem.category === text);
    setData([...newList]);
    setTitle(text);
  };

  //? Для добавления продуктов в cart
  const addToCard = (id) => {
    const newList = product.products.find((elem) => elem.id === id);
    if (newList) {
      alert("success product");
    }
    setCart([...cart, newList]);
  };

  //? Для обновления Home
  const homeClick = () => {
    setData(product.products);
    setTitle("Главное");
  };

  //? Для удаления от Сart добаленных продуктов  
  const deleteToCart=(id)=>{
    console.log("deleteToCart>>>", id)
    const conf=window.confirm("Подвердите дествия")
    if(conf){
      setCart([...cart.filter((elem,i)=>i!==id)])
    }
  }

  //? Для поиска продуков
  const searchClick=()=>{
    console.log("input>>>", input)
    const search=product.products.filter((elem)=>{
      return elem.title.toLowerCase().indexOf(input.toLowerCase())>-1
    })
    setData(search)
    setInput("")
  }

  return (
    <div>
      <Header
        homeClick={homeClick}
        category={category}
        categoryClick={categoryClick}
        cart={cart}
        searchClick={searchClick}
        setInput={setInput}
        input={input}
      />
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home addToCard={addToCard} data={data} title={title} />}
          />
          <Route path="/cart" element={<Cart cart={cart} deleteToCart={deleteToCart} />} />
        </Routes>
      </Container>
    </div>
  );
};

export default Main;
