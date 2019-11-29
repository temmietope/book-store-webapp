const express = require("express");
const router = express.Router();

// @ route  GET api/books
// @desc    Get all users books
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all books");
});

// @ route  POST api/books
// @desc    Add new book
// @access  Private
router.post("/", (req, res) => {
  res.send("Add book");
});

// @ route  PUT api/books/:id
// @desc    Update book
// @access  Private
router.put("/:id", (req, res) => {
  res.send("update book");
});

// @ route  DELETE api/books/:id
// @desc    Delete book
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("delete book");
});

module.exports = router;
