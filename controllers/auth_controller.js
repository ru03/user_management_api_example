const authService = require('../services/auth_service');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { status, user, token } = await authService.login({ email, password });
    res.status(status).json({ token, user });
  } catch ({ message, status }) {
    res.status(status).json({ message });
  }
}

module.exports = { login }