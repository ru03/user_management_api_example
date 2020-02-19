const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user_controller');
/* GET users listing. */
router.get('/', passport.authenticate('jwt', { session: false }), userController.allUsers);
router.get('/:id', passport.authenticate('jwt', { session: false }), userController.userById);
router.put('/:id', passport.authenticate('jwt', { session: false }), userController.updateUser);
router.delete('/:id', passport.authenticate('jwt', { session: false }), userController.deleteUser);
router.patch('/change-password', passport.authenticate('jwt', { session: false }), userController.changePassword);
router.post('/', passport.authenticate('jwt', { session: false }), userController.createUser);

module.exports = router;
