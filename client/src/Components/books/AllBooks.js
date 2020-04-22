import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import BookContext from "../../Context/book/bookContext";
import BookItem from "./BookItem";
import Spinner from "../layouts/Spinner";
import "./Books.css";

const AllBooks = () => {
  const bookContext = useContext(BookContext);
  const { allBooks, filteredAll, getAllBooks, loading } = bookContext;

  useEffect(() => {
    getAllBooks();
    //eslint-disable-next-line
  }, []);
  if (allBooks !== null && allBooks.length === 0 && !loading) {
    return (
      <div>
        No book for sale right now. You can <Link to="/login">Login</Link> so,
        you can post your books for sale. We will be glad to display them to
        potential buyers.
      </div>
    );
  }
  if (loading) {
    return <Spinner />;
  }
  const renderNoBooks = () => {
    return (
      <div>
        No book for sale right now. You can <Link to="/login">Login</Link> so,
        you can post your books for sale. We will be glad to display them to
        potential buyers.
      </div>
    );
  };
  return (
    <div className="book-wrapper">
      {loading ? (
        <Spinner />
      ) : allBooks !== null && allBooks.length === 0 ? (
        renderNoBooks()
      ) : (
        <TransitionGroup>
          {filteredAll !== null
            ? filteredAll.map((book) => (
                <CSSTransition key={book._id} timeout={500} classNames="item">
                  <BookItem book={book} />
                </CSSTransition>
              ))
            : allBooks.map((book) => (
                <CSSTransition key={book._id} timeout={500} classNames="item">
                  <BookItem book={book} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      )}

      {/* {allBooks !== null && !loading && (
        <TransitionGroup>
          {filteredAll !== null
            ? filteredAll.map(book => (
                <CSSTransition key={book._id} timeout={500} classNames="item">
                  <BookItem book={book} />
                </CSSTransition>
              ))
            : allBooks.map(book => (
                <CSSTransition key={book._id} timeout={500} classNames="item">
                  <BookItem book={book} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      )} */}
    </div>
  );
};
export default AllBooks;
