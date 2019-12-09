import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BookContext from "../../Context/book/bookContext";
import BookItem from "./BookItem";
import Spinner from "../layouts/Spinner";
import "./Books.css";

const Books = () => {
  const bookContext = useContext(BookContext);
  const { books, filtered, getBooks, loading } = bookContext;

  useEffect(() => {
    getBooks();
    //eslint-disable-next-line
  }, []);
  if (books !== null && books.length === 0 && !loading) {
    return <div>You have no book</div>;
  }
  return (
    <div className="book-wrapper">
      {books !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(book => (
                <CSSTransition key={book._id} timeout={500} classNames="item">
                  <BookItem book={book} />
                </CSSTransition>
              ))
            : books.map(book => (
                <CSSTransition key={book._id} timeout={500} classNames="item">
                  <BookItem book={book} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default Books;
