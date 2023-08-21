import React from 'react'
import CartItem from '../Components/Cart-item'

const Home = (props) => {
    const {data} = props
  return (
    <div className='home-card'>
       {
        data.map((elem, index)=>{
            return  < CartItem key={index} {...elem} />
        })
       }
    </div>
  )
}

export default Home