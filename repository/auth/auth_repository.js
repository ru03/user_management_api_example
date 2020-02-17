const models = require('../../models');
const userModel = models.user;

const getUser = ({ email }) => userModel.findOne({
  attributes: ['id', 'name', 'email', 'active', 'password'],
  where: { email },
  raw: true,
});

module.exports = { getUser };