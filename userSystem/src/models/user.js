const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
  strict: true
});

UserSchema.set('toJSON', {
  virtuals: true
});

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;