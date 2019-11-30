const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Book = require("../models/Book");

// @ route  GET api/books
// @desc    Get all users books
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id }).sort({ date: -1 });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route  POST api/books
// @desc    Add new book
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required")
        .not()
        .isEmpty(),
      check("author", "Author is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, author, description, type } = req.body;

    try {
      const newBook = new Book({
        title,
        author,
        description,
        type,
        user: req.user.id
      });
      const book = await newBook.save();
      res.json(book);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);

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
