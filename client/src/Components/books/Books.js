import React, { Fragment, useContext } from "react";
import BookContext from "../../Context/book/bookContext";
import BookItem from "./BookItem";
import "./Books.css";

const Books = () => {
  const bookContext = useContext(BookContext);
  const { books, filtered } = bookContext;

  if (books.length === 0) {
    return <div>You have no book</div>;
  }
  return (
    <div className="book-wrapper">
      {filtered !== null
        ? filtered.map(book => <BookItem key={book.id} book={book} />)
        : books.map(book => <BookItem key={book.id} book={book} />)}
    </div>
  );
};
export default Books;
