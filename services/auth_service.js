const authRepository = require('../repository/auth/auth_repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const env = require('../config/env');

const login = async ({ email, password }) => {
  try {
    const user = await authRepository.getUser({ email });
    if (user) {
      const passAreEquals = await bcrypt.compare(password, user.password);
      if (passAreEquals) {
        const { password, ...userWithoutPass } = user;
        const payload = { id: user.id, email: user.email };
        const token = jwt.sign(payload, env.jwt.secret, { expiresIn: env.jwt.expiresIn });
        return { status: 200, user: userWithoutPass, token };
      } else {
        throw { status: 401, message: 'Password is not correct' };
      }
    } else {
      throw { status: 404, message: 'User not found' };
    }
  } catch (error) {
    throw { status: 500, message: 'Try again please' };
  }
}

module.exports = { login };