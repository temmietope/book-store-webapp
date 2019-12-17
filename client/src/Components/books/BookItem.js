import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import BookContext from "../../Context/book/bookContext";
import { withRouter } from "react-router-dom";

const BookItem = ({ book, ...props }) => {
  const bookContext = useContext(BookContext);
  const [userBooksPage, setUserBooksPage] = useState(false);

  useEffect(() => {
    if (props.history.location.pathname !== "/") {
      setUserBooksPage(true);
    }
  }, [props.history.location.pathname]);
  const {
    deleteBook,
    setCurrent,
    clearCurrent,
    addToCart,
    cart,
    books
  } = bookContext;
  const { _id, title, description, author, genre } = book;
  const genreColor = genre => {
    if (genre === "horror") {
      return "type type-blue";
    }
    if (genre === "kids") {
      return "type type-yellow";
    }
    if (genre === "romance") {
      return "type type-red";
    }
    if (genre === "general") {
      return "type type-green";
    }
  };
  const onDelete = () => {
    deleteBook(_id);
    clearCurrent();
  };
  const add = () => {
    addToCart(book);
  };
  const renderButtons = () => {
    return (
      <p className="buttons">
        <button className="btn edit-btn" onClick={() => setCurrent(book)}>
          <i className="far fa-edit" />
        </button>
        <button className="btn delete-btn" onClick={onDelete}>
          <i className="far fa-trash-alt" />
        </button>
      </p>
    );
  };

  const renderBuyNow = () => {
    return (
      <p className="buttons">
        <button className="add-to-cart" onClick={add}>
          Add to cart
        </button>
      </p>
    );
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
        {author} <small className={genreColor(genre)}>{genre}</small>
      </span>
      <span className="description">{description}</span>
      {userBooksPage ? renderButtons() : renderBuyNow()}
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

export default withRouter(BookItem);
