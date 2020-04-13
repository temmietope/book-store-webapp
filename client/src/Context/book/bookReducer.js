import {
  GET_BOOKS,
  GET_CART,
  GET_ALL_BOOKS,
  ADD_BOOK,
  DELETE_BOOK,
  ADD_TO_CART,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOK,
  FILTER_BOOKS,
  FILTER_ALL_BOOKS,
  CLEAR_FILTER,
  BOOK_ERROR,
  CLEAR_BOOKS,
  CLEAR_ALL_BOOK_HISTORY,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case GET_ALL_BOOKS:
      return {
        ...state,
        allBooks: action.payload,
        loading: false,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
        loading: false,
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => {
          return book._id !== action.payload;
        }),
        loading: false,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        loading: false,
      };
    case CLEAR_BOOKS:
      return {
        ...state,
        books: null,
        filtered: null,
        error: null,
        current: null,
        loading: false,
        cart: null
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book._id === action.payload._id ? action.payload : book
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case BOOK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FILTER_BOOKS:
      return {
        ...state,
        filtered: state.books.filter((book) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return book.title.match(regex) || book.author.match(regex);
        }),
      };
    case FILTER_ALL_BOOKS:
      return {
        ...state,
        filteredAll: state.allBooks.filter((book) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return book.title.match(regex) || book.author.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        filteredAll: null,
      };
    default:
      return state;
  }
};
