const GenreModel = require('../models/genre');

class GenreService {

  async createGenre(genre) {
    const newGenre = await GenreModel.create(genre);
    return newGenre;
  }

  findGenres (searchQuery = {}) {
    return GenreModel.find(searchQuery);
  }

  getByGenreId(id) {
    return GenreModel.findById(id);
  }

  async updateById(id, genre) {
    await GenreModel.updateOne({_id: id}, genre, { new: true });
    return this.getByGenreId(id);
  };

  deleteByGenreId(id) {
    return GenreModel.deleteOne({ _id: id });
  }
}

const service = new GenreService();

module.exports = service;