import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CartItem = (props) => {
  const { brand, title, description, price, images } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <div className="carts">
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{brand}</Card.Subtitle>
        </div>
        <Card.Text>{description}</Card.Text>
        <div className="carts">
          <Card.Title>{price} $</Card.Title>
          <Button variant="primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
