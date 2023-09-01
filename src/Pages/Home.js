import React from 'react'
import CartItem from '../Components/Cart-item'
import QRCode from "react-qr-code";

const Home = (props) => {
    const {data,title,addToCard} = props
  return (
   <div>
      <h1 className='home-title' >{title} {title==="Главное"?null:data.length}</h1>
     <div className='home-card'>
       {
        data.map((elem, index)=>{
            return  <CartItem children="Add to Cart" onClick={()=>addToCard(elem.id)} key={index} {...elem} />
        })
       }
    </div>
    <div className='code'>
     <QRCode  size={256}   value="Hello" />
    </div>
   </div>
  )
}

export default Home