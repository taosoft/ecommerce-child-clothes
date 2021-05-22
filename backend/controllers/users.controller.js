const UserService = require("../services/user.service");

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getUsers = async (req, res, next) => {
    try {
        const Users = await UserService.getUsers();
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res
            .status(200)
            .json({
                status: 200,
                data: Users,
                message: "Succesfully Users Recieved",
            });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const Users = await UserService.getUser(req.params.id);
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res
            .status(200)
            .json({
                status: 200,
                data: Users,
                message: "Succesfully User Recieved",
            });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.createUser = async (req, res, next) => {
    // Req.Body contains the form submit values.
    console.log("llegue al controller", req.body);
    const User = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    try {
        // Calling the Service function with the new object from the Request Body
        const createdUser = await UserService.createUser(User);
        return res
            .status(201)
            .json({ createdUser, message: "Succesfully Created User" });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e);
        return res
            .status(400)
            .json({ status: 400, message: "User Creation was Unsuccesfull" });
    }
};

exports.loginUser = async (req, res, next) => {
    // Req.Body contains the form submit values.
    console.log("body", req.body);
    const User = {
        email: req.body.email,
        password: req.body.password,
    };
    try {
        // Calling the Service function with the new object from the Request Body
        const loginUser = await UserService.loginUser(User);
        return res
            .status(201)
            .json({ loginUser, message: "Succesfully login" });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res
            .status(400)
            .json({ status: 400, message: "Invalid username or password" });
    }
};
