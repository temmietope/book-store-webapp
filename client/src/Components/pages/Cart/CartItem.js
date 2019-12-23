import React, { useState, useEffect } from "react";

const CartItem = cart => {
  useEffect(() => {
    if (cart) {
      setCartItem(cart);
    }
  }, [cart]);
  const [cartItem, setCartItem] = useState({});
  return (
    <section>
      {/* {console.log(cartItem)} */}
      {/* {cartItem && console.log(cartItem)} */}
      {/* {cartItem &&
        cartItem.map(cartItem => {
          return <div key={cartItem._id}>{cartItem.title}</div>;
        })} */}
    </section> 
  );
};

export default CartItem;
