import React from "react";
import Books from "../../books/Books";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
        <h1>Books</h1>

      <div className="home-wrapper">
        <div>{/* contactform */}</div>
        <div>
          <Books />
          {/* filter components */}
        </div>
      </div>
    </div>
  );
};

export default Home;
