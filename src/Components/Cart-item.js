import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from 'react-stars'

const CartItem = (props) => {
  const { brand, title, description, price, images, rating,onClick,children } = props;
  const [index,setIndex]=useState(0)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="img" variant="top" src={images[index]} />
      <div className="images">
       {
        images.map((elem,i)=>{
          return  <img width={40} style={{border:i===index?"1px solid red":null}} onClick={()=>setIndex(i)} height={40} src={elem} alt="" />
        })
       }
      </div>
      <Card.Body>
        <div className="title">
          <Card.Title>{title}</Card.Title>
          <Card.Title>{brand}</Card.Title>
        </div>
        <div className="description">
          <Card.Text>{description}</Card.Text>
        </div>
        <ReactStars count={5} size={25}  value={rating}   />
        <div className="price">
          <span>{price} $</span>
          <Button onClick={onClick} variant="primary">{children}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
