const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  genre: {
    type: String,
    default: null
  },
  author: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
  strict: true
});

BookSchema.set('toJSON', {
  virtuals: true
});

const Book = mongoose.model('Book', BookSchema, 'books');

module.exports = Book;