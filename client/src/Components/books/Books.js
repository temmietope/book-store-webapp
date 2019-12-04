import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(book => (
              <CSSTransition key={book.id} timeout={500} classNames="item">
                <BookItem book={book} />
              </CSSTransition>
            ))
          : books.map(book => (
              <CSSTransition key={book.id} timeout={500} classNames="item">
                <BookItem book={book} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};
export default Books;
