import React, { useState, useEffect } from 'react';
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
  const [addCard, setAddCard] = useState(JSON.parse(localStorage.getItem("data")) || [])

  useEffect(()=>{
    localStorage.setItem("data", JSON.stringify(addCard))
  }, [addCard])

  const searchClick = () => {
    const search = product.filter(elem => {
      return elem.title.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1
    })
    setData(search)
    setVal("")
  }

  //? catagory click
  const categoryClick = (event) => {
    // console.log("event>>>", event)
    const result = product.filter(elem => elem.category === event)
    setData([...result])
  }

  const addToCard = (e) => {
    const check = data.find(elem => elem.id === e)
    if (check) {
      alert("Товар добавлен")
    }
    const addcard = data.find(elem => elem.id === e)
    const newArr = [...addCard, addcard]
    setAddCard(newArr)
  }

  const removeItem = (event) => {
    const check = addCard.filter(elem => elem.id !== event)
    if (check) {
      alert("Товар удаленно")
    }
    const remove = addCard.filter(elem => elem.id !== event)
    setAddCard(remove)

  }

  const homeClick = () => {
    setData(product)
  }
  return (
    <div className="app">
      <Header
        category={category}
        searchClick={searchClick}
        val={val}
        setVal={setVal}
        categoryClick={categoryClick}
        homeClick={homeClick}
      />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home
            data={data}
            addToCard={addToCard}
          />} />
          <Route path='/card' element={<CardItem
            addCard={addCard}
            removeItem={removeItem}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
