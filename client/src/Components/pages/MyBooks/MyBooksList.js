import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import BookContext from "../../../Context/book/bookContext";
import AuthContext from "../../../Context/auth/authContext";
import BookItem from "../../../Components/books/BookItem";
import Spinner from "../../layouts/Spinner";

const MyBooksList = ({ books }) => {
  console.log(books);
  return (
    <>
      {books.map(book => {
        return (
          <CSSTransition key={book._id} timeout={500} classNames="item">
            <BookItem book={book} />
          </CSSTransition>
        );
      })}
    </>
  );
};

export default MyBooksList;
