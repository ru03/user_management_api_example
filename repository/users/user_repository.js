const models = require('../../models');
const userModel = models.user;

const create = (user) => userModel.create(user, { raw: true });

const findAll = (limit = 10, offset = 1, order = 'ASC') => userModel.findAndCountAll({
  attributes: ['id', 'name', 'lastName', 'email', 'createdAt', 'updatedAt'],
  raw: true,
  offset,
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