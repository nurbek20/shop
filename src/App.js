import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Home from './Components/Home'
import CardItem from './Components/Card'
import { Route, Routes } from 'react-router-dom'
import product from './Data/products.json'
import category from './category'

const App = () => {
  const [data, setData] = useState(product)
  const [val, setVal] = useState('')

  const searchClick=()=>{
    const search = product.filter(elem=>{
      return elem.title.toLocaleLowerCase().indexOf(val.toLocaleLowerCase())>-1
    })
    setData(search)
    setVal("")
  }

  //? catagory click
  const categoryClick=(event)=>{
    // console.log("event>>>", event)
    const result=product.filter(elem=>elem.category===event)
    setData([...result])
  } 

  return (
    <div className="app">
      <Header 
      category={category}
      searchClick={searchClick}
      val={val}
      setVal={setVal}
      categoryClick={categoryClick}
      />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home
            data={data}
          />} />
          <Route path='/card' element={<CardItem
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
