const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');
/* GET users listing. */
router.get('/', userController.allUsers);
router.get('/:id', userController.userById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/change-password', userController.changePassword);
router.post('/', userController.createUser);

module.exports = router;
