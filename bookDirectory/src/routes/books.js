const router = require('express').Router();
const HttpStatus = require('http-status-codes');
const BookService = require('../services/books');

router.get('/books', async (req, res, next) => {
  let books;
  try {
    books = await BookService.findBooks(req.query);
  } catch (e) {
    return next(e)
  }
  return res.status(HttpStatus.StatusCodes.OK).json(books);
})

router.post('/books', async (req, res, next) => {
  try {
    let book = await BookService.createBook(req.body);
    return res.status(HttpStatus.StatusCodes.OK).json(book);
  } catch (e) {
    console.log(e);
    return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json('Unable to create book')
  }
})

module.exports = router;