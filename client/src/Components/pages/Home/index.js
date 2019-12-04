import React from "react";
import Books from "../../books/Books";
import "./Home.css";
import BookForm from "../../../Context/book/BookForm";

const Home = () => {
  return (
    <div className="home">
      <h1>Books</h1>

      <div className="home-wrapper">
        <div className="book-form">
          <BookForm />
        </div>
        <div>
          <Books />
          {/* filter components */}
        </div>
      </div>
    </div>
  );
};

export default Home;
