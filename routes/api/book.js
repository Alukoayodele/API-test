const express = require('express');
const moment = require('moment');
const router = express.Router();

// Load Books Model
const Book = require('../../model/Books');

// @route  POST api/v1/books
// @desc   Create new book

router.post('/', async (req, res) => {
  // Get book details
  const bookDetails = {};
  if (req.body.name) bookDetails.name = req.body.name;
  if (req.body.isbn) bookDetails.isbn = req.body.isbn;
  if (req.body.authors.length > 1) {
    bookDetails.authors = req.body.authors.split(',');
  }
  if (req.body.number_of_pages)
    bookDetails.number_of_pages = req.body.number_of_pages;
  if (req.body.publisher) bookDetails.publisher = req.body.publisher;
  if (req.body.country) bookDetails.country = req.body.country;
  if (req.body.release_date) bookDetails.release_date = req.body.release_date;

  const {
    name,
    isbn,
    authors,
    number_of_pages,
    publisher,
    country,
    release_date,
  } = bookDetails;
  try {
    const newBook = new Book({
      name,
      isbn,
      authors,
      number_of_pages,
      publisher,
      country,
      release_date,
    });

    const bookData = await newBook.save();
    res.json({ status_code: 200, status: 'Success', data: bookData });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/v1/books
// @desc   All books

router.get('/', async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.json({ status_code: 200, status: 'Success', data: allBooks });
  } catch (err) {
    return res.json({
      status_code: 200,
      status: 'Success',
      data: [],
    });
  }
});

// @route  GET api/v1/books/:id
// @desc   get books by id

router.get('/:id', async (req, res) => {
  try {
    const getBookById = await Book.findById(req.params.id);
    res.json({ status_code: 200, status: 'Success', data: getBookById });
  } catch (err) {
    return res.json({
      status_code: 200,
      status: 'Success',
      data: [],
    });
  }
});

// @route  GET api/v1/books/name/:name
// @desc   get books by name

router.get('/name/:name', async (req, res) => {
  try {
    const getBookByName = await Book.find({
      name: req.params.name.toLocaleLowerCase(),
    });
    res.json({ status_code: 200, status: 'Success', data: getBookByName });
  } catch (err) {
    return res.json({
      status_code: 200,
      status: 'Success',
      data: [],
    });
  }
});

// @route  GET api/v1/books/country/:country
// @desc   get books by country
router.get('/country/:country', async (req, res) => {
  try {
    const getBookByCountry = await Book.find({
      country: req.params.country.toLocaleLowerCase(),
    });
    res.json({ status_code: 200, status: 'Success', data: getBookByCountry });
  } catch (err) {
    return res.json({
      status_code: 200,
      status: 'Success',
      data: [],
    });
  }
});

// @route  GET api/v1/books/publisher/:publisher
// @desc   get books by publisher
router.get('/publisher/:publisher', async (req, res) => {
  try {
    const getBookByPublisher = await Book.find({
      publisher: req.params.publisher.toLocaleLowerCase(),
    });
    res.json({ status_code: 200, status: 'Success', data: getBookByPublisher });
  } catch (err) {
    return res.json({
      status_code: 200,
      status: 'Success',
      data: [],
    });
  }
});

// @route  GET api/v1/books/release_date/:year
// @desc   get books by release_date
router.get('/release_date/:year', async (req, res) => {
  const year = Number(req.params.year);

  try {
    const getBookByDate = await Book.find({
      $expr: {
        $eq: [{ $year: '$release_date' }, year],
      },
    });
    res.json({ status_code: 200, status: 'Success', data: getBookByDate });
  } catch (err) {
    return res.json({
      status_code: 200,
      status: 'Success',
      data: [],
    });
  }
});

// @route  PATCH api/v1/books/:id
// @desc   update book by id

router.patch('/:id', async (req, res) => {
  const {
    name,
    isbn,
    authors,
    number_of_pages,
    publisher,
    country,
    release_date,
  } = req.body;
  const bookDetails = {};
  if (name) bookDetails.name = name;
  if (isbn) bookDetails.isbn = isbn;
  if (publisher) bookDetails.publisher = publisher;
  if (authors.length > 1) {
    bookDetails.authors = authors.split(',');
  }
  if (number_of_pages) bookDetails.number_of_pages = number_of_pages;
  if (country) bookDetails.country = country;
  if (release_date) bookDetails.release_date = release_date;

  try {
    let oldName = await Book.findById(req.params.id);

    let bookData = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: bookDetails },
      { new: true }
    );
    res.json({
      status_code: 200,
      message: `The book ${oldName.name} was updated successfully`,
      status: 'Success',
      data: bookData,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  DELETE api/v1/books/:id
// @desc   delete book by id
router.delete('/:id', async (req, res) => {
  try {
    let oldName = await Book.findById(req.params.id);
    await Book.findByIdAndDelete(req.params.id);
    res.json({
      status_code: 200,
      message: `The book ${oldName.name} was deleted successfully`,
      status: 'Success',
      data: [],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
