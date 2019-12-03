import React, { Fragment, useContext } from "react";
import BookContext from "../../Context/book/bookContext";
import BookItem from "./BookItem";
import "./Books.css";

const Books = () => {
  const bookContext = useContext(BookContext);
  const { books } = bookContext;
  return (
    <div className="book-wrapper">
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};
export default Books;
