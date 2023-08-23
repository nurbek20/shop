import React from "react";
import CartItem from "../Components/Cart-item";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div className="addtocart">
      {cart.map((elem,index) => {
        return <CartItem children="Delete to Cart" key={index} {...elem} />;
      })}
    </div>
  );
};

export default Cart;
