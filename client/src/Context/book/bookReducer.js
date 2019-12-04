import {
    ADD_BOOK,
    DELETE_BOOK,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_BOOK,
    FILTER_BOOKS,
    CLEAR_FILTER
  } from "../types";

  export default (state, action)=>{
      switch(action.type){
          case ADD_BOOK:
              return{
                  ...state, books: [...state.books, action.payload]
              }
          default: 
          return state
      }
  }