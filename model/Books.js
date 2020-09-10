const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookShcema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    max: 15,
  },
  authors: {
    type: [String],
    required: true,
  },
  number_of_pages: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    lowercase: true,
    required: true,
  },
  country: {
    type: String,
    lowercase: true,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
});

module.exports = Books = mongoose.model('books', BookShcema);
