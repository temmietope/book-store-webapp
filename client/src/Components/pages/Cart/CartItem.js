import React from "react";

const CartItem = ({ cartItem }) => {
  return (
    <section>
      <h1>{cartItem.title}</h1>
    </section>
  );
};

export default CartItem;
