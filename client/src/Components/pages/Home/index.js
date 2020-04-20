import React from "react";
import "./Home.css";
import BookFilter from "../../../Context/book/BookFilter";
import AllBooks from "../../books/AllBooks";

const Home = () => {
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
