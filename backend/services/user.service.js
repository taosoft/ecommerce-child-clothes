// Gettign the Newly created Mongoose Model we just created
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Saving the context of this module inside the _the variable
_this = this;

// Async function to get the User List
exports.getUsers = async () => {
    // Try Catch the awaited promise to handle the error
    try {
        const Users = await User.find({});
        // Return the Userd list that was retured by the mongoose promise
        return Users;
    } catch (e) {
        // return a Error message describing the reason
        console.log("error services", e);
        throw Error("Error while Paginating Users");
    }
};

exports.getUser = async (userId) => {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (e) {
        console.log("error services", e);
        throw Error("Error while searching Users");
    }
};

exports.createUser = async (user) => {
    // Creating a new Mongoose Object by using the new keyword
    const hashedPassword = bcrypt.hashSync(user.password, 8);

    const newUser = new User({
        name: user.name,
        email: user.email,
        date: new Date(),
        password: hashedPassword,
    });

    try {
        // Saving the User
        const savedUser = await newUser.save();
        const token = jwt.sign(
            {
                id: savedUser._id,
            },
            process.env.SECRET,
            {
                expiresIn: "7d",
            }
        );

        return { createdUser: savedUser, token: token };
    } catch (e) {
        // return a Error message describing the reason
        console.log(e);
        throw Error("Error while Creating User");
    }
};

exports.loginUser = async (user) => {
    // Creating a new Mongoose Object by using the new keyword
    try {
        // Find the User
        console.log("login:", user);
        const _details = await User.findOne({
            email: user.email,
        });
        const passwordIsValid = bcrypt.compareSync(
            user.password,
            _details.password
        );
        if (!passwordIsValid) throw Error("Invalid username/password");
        if (!_details.verificado) throw Error("La cuenta no ha sido validada");

        const token = jwt.sign(
            {
                id: _details._id,
            },
            process.env.SECRET,
            {
                expiresIn: "7d", // expires in 24 hours
            }
        );
        return { token: token, user: _details };
    } catch (e) {
        // return a Error message describing the reason
        throw Error("Error while Login User");
    }
};
