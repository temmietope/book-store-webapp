import React, { useContext } from "react";
import PropTypes from "prop-types";
import BookContext from "../../Context/book/bookContext";

const BookItem = ({ book }) => {
  const bookContext = useContext(BookContext);
  const { deleteBook, setCurrent, clearCurrent } = bookContext;
  const { id, title, description, author, genre } = book;
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
    deleteBook(id);
    clearCurrent()
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
      <p className="buttons">
        <button className="btn edit-btn" onClick={() => setCurrent(book)}>
          <i className="far fa-edit" />
        </button>
        <button className="btn delete-btn" onClick={onDelete}>
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
