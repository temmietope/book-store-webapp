import React, { useContext, useEffect } from "react";
import "./Home.css";
import BookFilter from "../../../Context/book/BookFilter";
import AuthContext from "../../../Context/auth/authContext";
import BookContext from "../../../Context/book/bookContext";
import AllBooks from "../../books/AllBooks";

const Home = () => {
  const authContext = useContext(AuthContext);
  const bookContext = useContext(BookContext);

  const { loadUser, user, isAuthenticated } = authContext;
  const { getUserCart } = bookContext;

  useEffect(() => {
    loadUser();
    // if (isAuthenticated && user) {
    //   console.log(user);
    //   getUserCart(user._id);
    // }
    return(()=>{
      if(user){
        getUserCart(user._id)

      }
    })
    // eslint-disable-next-line
  }, [isAuthenticated]);
  return (
    <div className="home">
      <h1>Books</h1>

      <div className="home-wrapper">
        <div className="book-list">
          <BookFilter />
          <AllBooks />
        </div>
      </div>
    </div>
  );
};

export default Home;
