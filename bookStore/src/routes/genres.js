const router = require('express').Router();
const HttpStatus = require('http-status-codes');
const GenreService = require('../services/genres');

router.get('/genres', async (req, res, next) => {
  try {
    let genres = await GenreService.findGenres(req.query);
    return res.status(HttpStatus.StatusCodes.OK).json(genres);
  } catch (e) {
    return next(e)
  }
})

router.post('/genre', async (req, res, next) => {
  try {
    let genre = await GenreService.createGenre(req.body);
    return res.status(HttpStatus.StatusCodes.OK).json(genre);
  } catch (e) {
    console.log(e);
    return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json('Unable to create genre')
  }
})

router.delete('/genre/:id', async (req, res, next) => {
  try {
    await GenreService.deleteByGenreId(req.params.id);
    return res.status(HttpStatus.StatusCodes.OK).json('Succesfully deleted genre')
  } catch (e) {
    console.log(e);
    return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json('Unable to delete genre')
  }
})

router.put('/genre/:id', async (req, res, next) => {
  try {
    let genre = await GenreService.updateById(req.params.id, req.body);
    return res.status(HttpStatus.StatusCodes.OK).json({message: 'Succesfully updated genre', genre})
  } catch (e) {
    console.log(e);
    return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json('Unable to update genre')
  }
})

module.exports = router;