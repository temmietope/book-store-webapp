import React, { useContext, useEffect } from "react";
import BookContext from "../../../Context/book/bookContext";
import AuthContext from "../../../Context/auth/authContext";
import CartItem from "./CartItem";
import Spinner from "../../layouts/Spinner";

const Cart = () => {
  const bookContext = useContext(BookContext);
  const authContext = useContext(AuthContext);
  const { getUserCart, loading, cart } = bookContext;
  const { isAuthenticated, user } = authContext;
  useEffect(() => {
    if (isAuthenticated && user) {
      getUserCart(user._id);
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);
  return (
    <div>
      <h2>Cart</h2>
      {loading && cart === null ? (
        <Spinner />
      ) : (
        <div>
          {cart &&
            cart.map((cartItem, index) => {
              return <CartItem key={index} cartItem={cartItem} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Cart;
