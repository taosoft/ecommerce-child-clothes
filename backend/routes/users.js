var express = require('express')
var router = express.Router()
var UserController = require('../controllers/users.controller');

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.post('/registration', UserController.createUser);
router.post('/login/', UserController.loginUser);
router.get('/:id', UserController.getUser);
router.get('/', UserController.getUsers);

// Export the Router
module.exports = router;