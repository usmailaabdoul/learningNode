const UserService = require('./users');

class AuthService {

  async register (user) {
    return UserService.createUser(user);
  }

}

const service = new AuthService();

module.exports = service;