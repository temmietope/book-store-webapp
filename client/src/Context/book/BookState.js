import React, { useReducer } from "react";
import axios from "axios";
import BookContext from "./bookContext";
import bookReducer from "./bookReducer";
import {
  GET_BOOKS,
  ADD_BOOK,
  DELETE_BOOK,
  BOOK_ERROR,
  SET_CURRENT,
  CLEAR_BOOKS,
  CLEAR_CURRENT,
  UPDATE_BOOK,
  FILTER_BOOKS,
  CLEAR_FILTER
} from "../types";

const BookState = props => {
  const initialState = {
    books: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);
  //Get Books
  const getBooks = async () => {
    try {
      const res = await axios.get("api/books");
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg
      });
    }
  };
  //Add Book
  const addBook = async book => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("api/books", book, config);
      dispatch({
        type: ADD_BOOK,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg
      });
    }
  };
  //Delete Book
  const deleteBook = async id => {
    await axios.delete(`api/books/${id}`);
    dispatch({
      type: DELETE_BOOK,
      payload: id
    });
  };
  //Update Book
  const updateBook = async book => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.put(`api/books/${book._id}`, book, config);
      dispatch({ type: UPDATE_BOOK, payload: res.data });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg
      });
    }
  };
  //Clear Books
  const clearBooks = () => {
    dispatch({ type: CLEAR_BOOKS });
  };
  //SetCurrent Book
  const setCurrent = book => {
    dispatch({ type: SET_CURRENT, payload: book });
  };
  //Clear Current Book
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Filter Books
  const filterBooks = text => {
    dispatch({ type: FILTER_BOOKS, payload: text });
  };
  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <BookContext.Provider
      value={{
        books: state.books,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getBooks,
        addBook,
        deleteBook,
        setCurrent,
        clearCurrent,
        updateBook,
        filterBooks,
        clearFilter,
        clearBooks
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
