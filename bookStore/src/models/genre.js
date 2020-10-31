const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
}, {
  timestamps: true,
  strict: true
});

GenreSchema.set('toJSON', {
  virtuals: true
});

const Genre = mongoose.model('Genre', GenreSchema, 'genres');

module.exports = Genre;