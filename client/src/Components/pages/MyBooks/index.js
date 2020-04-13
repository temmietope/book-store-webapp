import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link, withRouter } from "react-router-dom";
import BookContext from "../../../Context/book/bookContext";
import AuthContext from "../../../Context/auth/authContext";

// import Spinner from "../../layouts/Spinner";
import "./MyBooks.css";
import BookForm from "../../../Context/book/BookForm";
import MyBooksList from "./MyBooksList";
import Spinner from "../../layouts/Spinner";

const MyBooks = () => {
  const bookContext = useContext(BookContext);
  const authContext = useContext(AuthContext);
  const { books, filtered, getBooks, loading } = bookContext;
  const { isAuthenticated, user, loadUser } = authContext;

  useEffect(() => {
    if (isAuthenticated && user) {
      getBooks(user._id);
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);
  return (
    <div className="my-book-wrapper">
      <div className="my-book">
        <div className="book-form">
          <BookForm />
        </div>
        {books !== null && !loading ? (
          <TransitionGroup>
            {filtered !== null ? (
              <MyBooksList books={filtered} />
            ) : (
              <MyBooksList books={books} />
            )}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
        {books !== null && books.length === 0 && !loading && (
          <div>No book for sale right now.</div>
        )}
      </div>
    </div>
  );
};
export default withRouter(MyBooks);
