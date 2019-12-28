const userRepository = require('../repository/users/user_repository');
const userValidator = require('../validators/users').validator;
const passValidator = require('../validators/users').password;
const bcrypt = require('bcrypt');

const create = async (user) => {
  try {
    await userValidator.validate(user, { abortEarly: false });

    const passHashed = await bcrypt.hash(user.password, 10);
    const { dataValues } = await userRepository.create({ ...user, password: passHashed });
    // Remove attribute password from object
    const { password, ...users } = dataValues;

    return { users, status: 200 };
  } catch ({ inner, message }) {
    if (inner) {
      const errors = inner.reduce((p, c) => {
        return { ...p, [c.path]: c.message };
      }, {});
      throw { messages: errors, status: 400 };
    } else {
      throw { message: 'An error ocurred. Try again.', status: 500 };
    }
  }
}

const changePassword = async ({ id, password }) => {
  try {
    await passValidator.validate({ password }, { abortEarly: false });
    const passHashed = await bcrypt.hash(password, 10);
    await userRepository.updatePassword({ id, password: passHashed, updatedAt: new Date().getTime() });
    return { status: 204 };
  } catch ({ inner, message }) {
    if (inner) {
      const errors = inner.reduce((p, c) => {
        return { ...p, [c.path]: c.message };
      }, {});
      throw { messages: errors, status: 400 };
    } else {
      throw { message: 'An error ocurred. Try again.', status: 500 };
    }
  }
}

const getAll = async (page, pageSize) => {
  try {
    const offset = page * pageSize;
    const { rows: users, count } = await userRepository.findAll(pageSize * 1, offset);
    return { users, count, status: 200 };
  } catch (error) {
    throw { message: 'An error ocurred. Try again.', status: 500 };
  }
}

const getById = async (id) => {
  try {
    const user = await userRepository.findById(id);
    return { status: 200, users: user };
  } catch (e) {
    throw { message: 'An error ocurred. Try again.', status: 500 };
  }
}

module.exports = { changePassword, create, getAll, getById };
