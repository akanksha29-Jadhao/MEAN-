const userController = require('./user.controller');
const router = require('express').Router();

router.post('/register', userController.registerUser);

module.exports = router