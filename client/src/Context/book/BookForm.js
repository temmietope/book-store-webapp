import React, { useState, useContext, useEffect } from "react";
import BookContext from "../../Context/book/bookContext";

const BookForm = ({ onRequestClose }) => {
  const bookContext = useContext(BookContext);
  const { addBook, current, clearCurrent, updateBook } = bookContext;

  useEffect(() => {
    if (current !== null) {
      setBook(current);
    } else {
      setBook({
        title: "",
        author: "",
        description: "",
        genre: "general",
      });
    }
  }, [bookContext, current]);
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    genre: "general",
  });

  const { title, author, description, genre } = book;
  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addBook(book);
    } else {
      updateBook(book);
    }
    clearAll();
    onRequestClose();
  };
  const clearAll = () => {
    clearCurrent();
  };
  const closeModal = () => {
    onRequestClose();
  };
  return (
    <form onSubmit={onSubmit}>
      <header>
        <h2>{current ? "Edit Book information" : "Add Book"}</h2>
      </header>
      <div className="input-new-book">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={author}
          onChange={onChange}
        />
        <textarea
          // type="text"
          rows="5"
          placeholder="Description"
          name="description"
          value={description}
          onChange={onChange}
        />
        <select
          name="genre"
          onChange={(e) => {
            onChange(e);
          }}
          value={genre}
        >
          <option value="general">General</option>
          <option value="kids">Kids</option>
          <option value="horror">Horror</option>
        </select>
      </div>
      <div className="submit-or-clear">
        <input
          type="submit"
          value={current ? "Update Book" : "Add Book"}
          className="submit-book form-btn"
        />
        <input
          type="button"
          onClick={closeModal}
          className="clear-book form-btn"
          value="Back"
        />
        {current && (
          <div className="clear-book-div">
            <input
              type="button"
              onClick={clearAll}
              className="clear-book form-btn"
              value="Clear"
            />
          </div>
        )}
        {/* <input
          type="button"
          onClick={onRequestClose()}
          className="clear-book"
          value="Back"
        /> */}
      </div>
    </form>
  );
};

export default BookForm;
