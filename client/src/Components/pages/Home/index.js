import React from "react";
import Books from "../../books/Books";
import "./Home.css";
import BookForm from "../../../Context/book/BookForm";
import BookFilter from "../../../Context/book/BookFilter";

const Home = () => {
  return (
    <div className="home">
      <h1>Books</h1>

      <div className="home-wrapper">
        <div className="book-form">
          <BookForm />
        </div>
        <div className="book-list">
          <BookFilter />
          <Books />
        </div>
      </div>
    </div>
  );
};

export default Home;
