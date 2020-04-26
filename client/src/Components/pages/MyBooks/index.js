import React, { useContext, useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { withRouter } from "react-router-dom";
import BookContext from "../../../Context/book/bookContext";
import AuthContext from "../../../Context/auth/authContext";
import BookForm from "../../../Context/book/BookForm";
import MyBooksList from "./MyBooksList";
import Spinner from "../../layouts/Spinner";
import "./MyBooks.css";
import Modal from "react-modal";
import BookFilter from "../../../Context/book/BookFilter";

Modal.setAppElement("#root");

const MyBooks = () => {
  const bookContext = useContext(BookContext);
  const authContext = useContext(AuthContext);
  const { books, filtered, getBooks, loading } = bookContext;
  const { isAuthenticated, user } = authContext;

  useEffect(() => {
    if (isAuthenticated && user) {
      getBooks(user._id);
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);

  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  const openAddModal = () => {
    setAddModalIsOpen(true);
  };
  const closeAddModal = () => {
    setAddModalIsOpen(false);
  };

  const renderNoBooks = () => {
    return (
      <div>
        You have not uploaded any book yet. Get started! The world needs to read
        yours!
      </div>
    );
  };
  return (
    <div className="my-book-wrapper">
      <Modal className="modal" isOpen={addModalIsOpen}>
        <BookForm onRequestClose={closeAddModal} />
      </Modal>
      <div className="add-new-book-button">
        <button onClick={openAddModal}>Add new book</button>
      </div>
      {loading ? (
        <Spinner />
      ) : books !== null && books.length === 0 ? (
        renderNoBooks()
      ) : books !== null && !loading ? (
        <TransitionGroup className="trans">
          {filtered !== null ? (
            <MyBooksList books={filtered} openAddModal={openAddModal} />
          ) : (
            <MyBooksList books={books} openAddModal={openAddModal} />
          )}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
      {/* </div> */}
    </div>
  );
};
export default withRouter(MyBooks);
