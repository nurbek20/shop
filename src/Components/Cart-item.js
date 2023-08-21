import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CartItem = (props) => {
  const { brand, title, description, price, images } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="img" variant="top" src={images[0]} />
      <Card.Body>
        <div className="title">
          <Card.Title>{title}</Card.Title>
          <Card.Title>{brand}</Card.Title>
        </div>
        <div className="description">
          <Card.Text>{description}</Card.Text>
        </div>
        <div className="price">
          <span>{price} $</span>
          <Button variant="primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
