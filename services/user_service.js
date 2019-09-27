const userRepository = require('../repository/users/user_repository');
const userValidator = require('../validators/users').validator;
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
    console.log(message)
    if (inner) {
      const errors = inner.reduce((p, c) => {
        return { ...p, [c.path]: c.message };
      }, {});
      throw { messages: errors, status: 400 };
    } else {
      throw { message: 'An error ocurred. Try again.', status: 400 };
    }
  }
}

const changePassword = async ({ id, password }) => {
  try {
    const passwordChanged = await userRepository.updatePassword({ id, password });
    return true;
  } catch (e) {
    return { message: 'Error' };
  }
}

const getAll = async () => {
  try {
    const users = await userRepository.findAll();
    return { users, status: 200 };
  } catch (error) {
    throw { message: 'An error ocurred. Try again.', status: 500 };
  }
}

const getById = async (id) => {
  try {
    const user = await userRepository.findById(id);
    return { status: 200, users: user };
  } catch (e) {
    throw { status: 500, message: 'An error ocurred. Try again.' };
  }
}

module.exports = { create, getAll, getById };
