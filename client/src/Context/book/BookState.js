import React, { useReducer } from "react";
import uuid from "uuid";
import BookContext from "./bookContext";
import bookReducer from "./bookReducer";
import {
  ADD_BOOK,
  DELETE_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOK,
  FILTER_BOOKS,
  CLEAR_FILTER
} from "../types";

const BookState = props => {
  const initialState = {
    books: [
      {
        id: 1,
        title: "Josh is here",
        author: "Fire",
        description: "this is the story a boy named Josh",
        type: "general"
      },
      {
        id: 2,
        title: "Irish girl",
        author: "Ndinneka",
        description: "5 yr old girl gives up on life",
        type: "kids"
      },
      {
        id: 3,
        title: "Abraka",
        author: "julius",
        description: "The village called Abraka has a lot of interesting features",
        type: "horror"
      }
    ]
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  //Add Book

  //Delete Book

  //SetCurrent Book

  //Clear Current Book

  //Update Book

  //Filter Books

  //Clear Filter

  return (
    <BookContext.Provider
      value={{
        books: state.books
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState