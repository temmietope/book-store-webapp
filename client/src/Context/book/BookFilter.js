import React, { useContext, useRef, useEffect } from "react";
import BookContext from "../../Context/book/bookContext";

const BookFilter = () => {
  const bookContext = useContext(BookContext);
  const text = useRef("");
  const { filterBooks, clearFilter, filtered } = bookContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = e => {
    if (text.current.value !== "") {
      filterBooks(e.target.value);
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

export default BookFilter;
