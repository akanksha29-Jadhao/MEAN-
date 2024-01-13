var express = require('express');
var router = express.Router();
const userController = require('./user.controller')

router.get('/', userController.getUsers);

router.post('/', userController.createUser);

module.exports = router;
