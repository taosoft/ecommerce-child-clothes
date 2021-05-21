const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users.controller');
const authorization = require('../auth/authorization');

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.post('/registration', UserController.createUser);
router.post('/login', UserController.loginUser);
router.get('/:id', UserController.getUser);
router.get('/', UserController.getUsers);

// Export the Router
module.exports = router;