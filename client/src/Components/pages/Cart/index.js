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

  // const compressArray = (original) => {
  //   let compressed = [];
  //   let copy = [...original];
  //   for (let i = 0; i < original.length; i++) {
  //     let myCount = 0;
  //     for (let w = 1; w < copy.length; w++) {
  //       if (original[i] === copy[w]) {
  //         myCount++;
  //       }
  //     }
  //     if (myCount > 0) {
  //       let counted = {};
  //       counted.value = original[i].title;
  //       counted.count = myCount;
  //       compressed.push(counted);
  //     }
  //   }
  //   return compressed;
  // };

  return (
    <div>
      <h2>Cart</h2>
      {/* {cart && compressArray(cart)} */}
      {loading && cart === null ? (
        <Spinner />
      ) : (
        <div>
          {cart &&
            // cart && compressArray(cart)
            cart.map((cartItem, index) => {
              return <CartItem key={index} cartItem={cartItem} />;
            })
          }
        </div>
      )}
    </div>
  );
};

export default Cart;
