const BookModel = require('../models/book');
const GenreService = require('../services/genres');

class BookService {

  async createBook(book) {
    const newBook = await BookModel.create(book);
    let _books = await BookModel.aggregate([
      {
        $lookup: {
          from: 'genres', localField: 'genreId', foreignField: '_id', as: 'genre'
        }
      }
    ])
    
    let _newBook = _books.find((b) => `${b._id}` === `${newBook._id}`);
    return _newBook;
  }

  async findBooks (searchQuery = {}) {
   let books = await BookModel.aggregate([
      {
        $lookup: {
          from: 'genres', localField: 'genreId', foreignField: '_id', as: 'genre'
        }
      }
    ])
    return books;
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