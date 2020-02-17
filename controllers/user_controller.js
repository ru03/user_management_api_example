const userService = require('../services/user_service');

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
    const { name, lastName, email, position, isActive: active } = req.body;
    const newUser = {
      name,
      lastName,
      email,
      active,
      position,
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

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { status } = await userService.deleteUser({ id });
    res.status(status).send();
  } catch ({ message, status }) {
    res.status(status).json({ message });
  }
}

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, lastName, email, position, isActive: active } = req.body;
    const updatedUser = {
      id,
      name,
      lastName,
      email,
      active,
      position,
    };
    const { status, users } = await userService.update(updatedUser);
    res.status(status).json({ users });
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

module.exports = { allUsers, changePassword, createUser, deleteUser, updateUser, userById }