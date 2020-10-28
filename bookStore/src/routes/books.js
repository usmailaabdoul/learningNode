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

router.delete('/book/:id', async (req, res, next) => {
  try {
    await BookService.deleteByBookId(req.params.id);
    return res.status(HttpStatus.StatusCodes.OK).json('Succesfully deleted Book')
  } catch (e) {
    console.log(e);
    return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json('Unable to delete book')
  }
})

router.put('/book/:id', async (req, res, next) => {
  try {
    let book = await BookService.updateById(req.params.id, req.body);
    return res.status(HttpStatus.StatusCodes.OK).json({message: 'Succesfully deleted Book', book})
  } catch (e) {
    console.log(e);
    return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json('Unable to update book')
  }
})

module.exports = router;