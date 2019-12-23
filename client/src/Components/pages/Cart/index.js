import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link, withRouter } from "react-router-dom";
import BookContext from "../../../Context/book/bookContext";
import AuthContext from "../../../Context/auth/authContext";
import CartItem from "./CartItem";

const Cart = () => {
  const bookContext = useContext(BookContext);
  const authContext = useContext(AuthContext);
  const { getUserCart, loading, cart } = bookContext;
  const { isAuthenticated, user } = authContext;

  useEffect(() => {
    console.log(cart);
    user && getUserCart(user._id);

    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2>Cart</h2>
      <CartItem cart={cart} />
      {/* {cart &&
        cart.map(cartItem => {
          return <div key={cartItem._id}>{cartItem.title}</div>;
        })} */}
    </div>
  );
};

export default Cart;
