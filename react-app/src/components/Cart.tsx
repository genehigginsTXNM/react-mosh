import React from "react";

interface Props {
  cartItems: string[];
}

const Cart = ({ cartItems }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul></ul>
    </>
  );
};

export default Cart;
