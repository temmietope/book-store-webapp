import React from "react";
import PropTypes from "prop-types";

const BookItem = ({ book }) => {
  const { id, title, description, author, type } = book;
  const typeColor = type => {
    if (type === "horror") {
      return "type type-blue";
    }
    if (type === "kids") {
      return "type type-yellow";
    }
    if (type === "romance") {
      return "type type-red";
    }
    if (type === "general") {
      return "type type-green";
    }
  };
  return (
    <div className="book-card">
      <span className="img">
        <img src="./images/reading.jpg" alt={book.title} />
      </span>
      <h3>{title}</h3>
      <span className="author">
        {" "}
        By: {"  "}
        {author} <small className={typeColor(type)}>{type}</small>
      </span>
      <span className="description">{description}</span>
      <p className="buttons">
        <button className="btn edit-btn">
          <i className="far fa-edit" />
        </button>
        <button className="btn delete-btn">
          <i className="far fa-trash-alt" />
        </button>
      </p>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookItem;
