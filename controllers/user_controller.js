const userService = require('../services/user_service');
const bcrypt = require('bcrypt');

const allUsers = async (req, res, next) => {
  try {
    const { status, users } = await userService.getAll();
    res.status(status).json({ users });
  } catch ({ message, status }) {
    res.status(status).json({ message });
  }
}

const createUser = async (req, res, next) => {
  try {
    const { name, lastName, email, password } = req.body;
    const newUser = {
      name,
      lastName,
      email,
      password,
    };
    const { status, users } = await userService.create(newUser);
    res.status(status).json({ users });
  } catch ({ message, messages, status }) {
    if (messages) {
      res.status(status).json({ message: messages });
    } else {
      res.status(status).json({ message });
    }
  }
}

const changePassword = async (req, res, next) => {
  try {
    const { id, password } = req.body;
    res.status(200).json({ message: 'Password changed succeesful' })
  } catch (e) {
    // TODO: Handle error
    console.log(e)
    res.status(500).json({ error: 'Error' });
  }
}

const userById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log('id', id)
    const { status, users } = await userService.getById(id);
    res.status(status).json({ users });
  } catch ({ message, status }) {
    res.status(status).json({ message });
  }
}

module.exports = { allUsers, changePassword, createUser, userById }