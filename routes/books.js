const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Book = require("../models/Book");

// @ route  GET api/books
// @desc    Get all users books
// @access  Public
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort({ date: -1 });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route  GET api/books
// @desc    Get all users books
// @access  Private
router.get("/user", auth, async (req, res) => {
  const params = {};
  if (req.query.id) {
    params.user = req.query.id;
  }
  try {
    const books = await Book.find({ ...params }).sort({ date: -1 });
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
    const { title, author, description, genre } = req.body;

    try {
      const newBook = new Book({
        title,
        author,
        description,
        genre,
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
router.put(
  "/:id",
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
    const { title, author, description, genre } = req.body;
    let id = req.params.id;
    try {
      const book = await Book.findById(id);
      (book.title = title),
        (book.author = author),
        (book.description = description),
        (book.genre = genre);

      const updatedBook = await book.save();
      res.json(updatedBook);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
);

// @ route  DELETE api/books/:id
// @desc    Delete book
// @access  Private
router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndRemove(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
