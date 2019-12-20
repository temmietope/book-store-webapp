import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link, withRouter } from "react-router-dom";
import BookContext from "../../../Context/book/bookContext";
import AuthContext from "../../../Context/auth/authContext";

const Cart = () => {
  const bookContext = useContext(BookContext);
  const authContext = useContext(AuthContext);
  const { getUserCart, loading, cart } = bookContext;
  const { isAuthenticated, user } = authContext;

  useEffect(() => {
    isAuthenticated && getUserCart(user._id) && console.log(cart);
    // if (isAuthenticated && user) {
    //   getUserCart(user._id);
    //   console.log(cart)
    // }

    return () => {
      console.log(cart);
    };
    //eslint-disable-next-line
  }, [isAuthenticated, user]);
  return (
    <div>
      {cart &&
        cart.map(cartItem => {
          return <div key={cartItem._id}>{cartItem.title}</div>;
        })}
    </div>
  );
};

export default Cart;
