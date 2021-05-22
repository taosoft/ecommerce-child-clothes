const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users.controller");
const Authorization = require("../auth/authorization");

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.post("/registration", UserController.createUser);
router.post("/login", UserController.loginUser);
router.get("/:id", Authorization, UserController.getUser);
router.get("/", Authorization, UserController.getUsers);

// Export the Router
module.exports = router;
