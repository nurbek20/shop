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
    const [title,setTitle]=useState("Главное")
    const [cart,setCart]=useState([])

    const categoryClick=(text)=>{
      console.log("elem>>>", text)
      const newList=product.products.filter((elem)=>elem.category===text)
      setData([...newList])
      setTitle(text)
    }
    console.log(data)
    const addToCard=(id)=>{
      console.log("addToCard", id)
      const newList=product.products.find((elem)=>elem.id===id)
      if(newList){
        alert('success product')
      }
      setCart([...cart, newList])
    }
    const homeClick=()=>{
      setData(product.products)
      setTitle('Главное')
    }

  return (
    <div>
      <Header homeClick={homeClick} category={category} categoryClick={categoryClick} cart={cart} />
      <Container>
        <Routes>
            <Route path="/" element={<Home addToCard={addToCard} data={data} title={title} />} />
            <Route path='/cart' element={<Cart cart={cart}/>} />
        </Routes>
      </Container>
    </div>
  );
};

export default Main;
