const UserModel = require('../models/user');

class UserService {

  async createUser(user) {
    const newUser = await UserModel.create(user);
    return newUser;
  }

  findUser (searchQuery = {}) {
    return UserModel.find(searchQuery);
  }

  getByUserId(id) {
    return UserModel.findById(id);
  }

  async updateById(id, book) {
    await UserModel.updateOne({_id: id}, book, { new: true });
    return this.getByUserId(id);
  };

  deleteByUserId(id) {
    return UserModel.deleteOne({ _id: id });
  }
}

const service = new UserService();

module.exports = service;