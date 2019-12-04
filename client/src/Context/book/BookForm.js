import React, { useState, useContext } from "react";
import BookContext from "../../Context/book/bookContext";

const BookForm = () => {
  const bookContext = useContext(BookContext);
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    genre: "general"
  });

  const { title, author, description, genre } = book;
  const onChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    bookContext.addBook(book);
    setBook({
      title: "",
      author: "",
      description: "",
      genre: "general"
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>Add Book</h2>
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
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={onChange}
        />
        <h5>Book genre</h5>
        <div className="select-genre">
          <select
            name="genre"
            onChange={e => {
              onChange(e);
            }}
          >
            <option value="general">General</option>
            <option value="kids">Kids</option>
            <option value="horror">Horror</option>
          </select>
        </div>
      </div>

      <div>
        <input type="submit" value="Add Book" className="submit-book" />
      </div>
    </form>
  );
};

export default BookForm;
