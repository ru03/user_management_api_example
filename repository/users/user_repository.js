const models = require('../../models');
const userModel = models.user;

const create = (user) => userModel.create(user, { raw: true });

const findAll = (limit = 10, order = 'DESC') => userModel.findAll({
  attributes: ['id', 'name', 'lastName', 'email', 'createdAt', 'updatedAt'],
  raw: true,
  limit,
  order: [['lastName', order]]
});

const findById = (id) => userModel.findOne({
  attributes: ['id', 'name', 'lastName', 'email', 'createdAt', 'updatedAt'],
  where: { id },
  raw: true,
});

const updatePassword = ({ id, password }) => userModel.update({ password }, { where: { id } });

module.exports = { create, findAll, findById, updatePassword };