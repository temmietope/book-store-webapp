import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link, withRouter } from "react-router-dom";
import BookContext from "../../../Context/book/bookContext";
import AuthContext from "../../../Context/auth/authContext";

import BookItem from "../../../Components/books/BookItem";
import Spinner from "../../layouts/Spinner";
import "./MyBooks.css";
import BookForm from "../../../Context/book/BookForm";

const MyBooks = props => {
  const bookContext = useContext(BookContext);
  const authContext = useContext(AuthContext);
  const { books, filtered, getBooks, getUserCart, loading } = bookContext;
  const { isAuthenticated, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    if (isAuthenticated && user) {
      getBooks(user._id);
      // getUserCart(user._id);
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);
  if (books !== null && books.length === 0 && !loading) {
    return (
      <div>
        No book for sale right now. You can <Link to="/register">register</Link>{" "}
        so, you can post your books for sale. We will be glad to display them to
        potential buyers.
      </div>
    );
  }
  return (
    <div className="my-book-wrapper">
      <div className="my-book">
        <div className="book-form">
          <BookForm />
        </div>
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
    </div>
  );
};
export default withRouter(MyBooks);
