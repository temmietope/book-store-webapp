import React, { useReducer, useEffect, useContext } from "react";
import axios from "axios";
import BookContext from "./bookContext";
import bookReducer from "./bookReducer";
import {
  GET_BOOKS,
  GET_CART,
  GET_ALL_BOOKS,
  ADD_BOOK,
  DELETE_BOOK,
  BOOK_ERROR,
  SET_CURRENT,
  CLEAR_BOOKS,
  CLEAR_CURRENT,
  UPDATE_BOOK,
  FILTER_BOOKS,
  FILTER_ALL_BOOKS,
  CLEAR_FILTER,
  ADD_TO_CART,
  DELETE_FROM_CART
} from "../types";

const BookState = props => {

  const initialState = {
    allBooks: null,
    books: null,
    current: null,
    filtered: null,
    filteredAll: null,
    error: null,
    cart: null,
    loading: true
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);
  //Get Books
  const getBooks = async user_id => {
    try {
      const res = await axios.get(`api/books/user?id=${user_id}`);
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

  //Get User cart
  const getUserCart = async user_id => {
    try {
      const res = await axios.get(`api/books/cart?id=${user_id}`);
      dispatch({
        type: GET_CART,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: BOOK_ERROR,
        payload: err.response.msg
      });
    }
  };

  //Get All Books
  const getAllBooks = async () => {
    try {
      const res = await axios.get("api/books/");
      dispatch({
        type: GET_ALL_BOOKS,
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

  //Add Book To Cart
  const addToCart = async book => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("api/books/cart", book, config);
      dispatch({
        type: ADD_TO_CART,
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

  ////Filter All Books
  const filterAllBooks = text => {
    dispatch({ type: FILTER_ALL_BOOKS, payload: text });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <BookContext.Provider
      value={{
        allBooks: state.allBooks,
        books: state.books,
        current: state.current,
        filtered: state.filtered,
        filteredAll: state.filteredAll,
        error: state.error,
        cart: state.cart,
        loading: state.loading,
        getBooks,
        getUserCart,
        getAllBooks,
        addBook,
        deleteBook,
        addToCart,
        setCurrent,
        clearCurrent,
        updateBook,
        filterBooks,
        filterAllBooks,
        clearFilter,
        clearBooks
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
