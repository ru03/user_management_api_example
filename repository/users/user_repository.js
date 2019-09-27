const models = require('../../models');
const userModel = models.user;

const create = (user) => userModel.create(user, { raw: true });

const findAll = () => userModel.findAll({
  attributes: ['id', 'name', 'lastName', 'email', 'createdAt', 'updatedAt'],
  raw: true,
});

const findById = (id) => userModel.findOne({
  attributes: ['id', 'name', 'lastName', 'email', 'createdAt', 'updatedAt'],
  where: { id },
  raw: true,
});

const updatePassword = ({ id, password }) => userModel.update({ id, password });

module.exports = { create, findAll, findById, updatePassword };