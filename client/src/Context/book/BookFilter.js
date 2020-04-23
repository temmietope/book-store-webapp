import React, { useContext, useRef, useEffect } from "react";
import BookContext from "../../Context/book/bookContext";
import { withRouter } from "react-router-dom";

const BookFilter = props => {
  const bookContext = useContext(BookContext);
  const text = useRef("");
  const {
    filterBooks,
    filterAllBooks,
    clearFilter,
    filtered,
    filteredAll
  } = bookContext;

  useEffect(() => {
    if (filtered || filteredAll === null) {
      text.current.value = "";
    }
  });
  const onChange = e => {
    if (text.current.value !== "") {
      if(props.routelink === 'home'){
      filterAllBooks(e.target.value);
      }
      if(props.routelink === 'mybooks'){
        filterBooks(e.target.value);
        }
      // if (props.history.location.pathname !== "/") {
      //   filterBooks(e.target.value);
      // }
      // filterAllBooks(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div className="filter-form">
      <form>
        <input
          ref={text}
          type="text"
          placeholder="Filter Books..."
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default withRouter(BookFilter);
