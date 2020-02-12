const userService = require('../services/user_service');
const bcrypt = require('bcrypt');

const allUsers = async (req, res, next) => {
  try {
    const { page, limit, order } = req.query;
    const { count, status, users } = await userService.getAll(page, limit, order);
    res.status(status).json({ count, users });
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
    const { status } = await userService.changePassword({ id, password });
    res.status(status).json();
  } catch ({ message, messages, status }) {
    if (messages) {
      res.status(status).json({ message: messages });
    } else {
      res.status(status).json({ message });
    }
  }
}

const userById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { status, users } = await userService.getById(id);
    res.status(status).json({ users });
  } catch ({ message, status }) {
    res.status(status).json({ message });
  }
}

module.exports = { allUsers, changePassword, createUser, userById }