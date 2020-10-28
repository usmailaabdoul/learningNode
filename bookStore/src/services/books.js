const BookModel = require('../models/book');

class BookService {
  constructor() {
    this.BookMode = BookModel;
  }

  async createBook(book) {
    const newBook = await BookModel.create(book);
    return newBook;
  }

  findBooks (searchQuery = {}) {
    return BookModel.find(searchQuery);
  }

  getByBookId(id) {
    return BookModel.findById(id);
  }

  async updateById(id, book) {
    await BookModel.updateOne({_id: id}, book, { new: true });
    return this.getByBookId(id);
  };

  deleteByBookId(id) {
    return BookModel.deleteOne({ _id: id });
  }
}

const service = new BookService();

module.exports = service;