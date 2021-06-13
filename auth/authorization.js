const jwt = require("jsonwebtoken");
const config = require("../config").config();

const authorization = (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    const msg = { auth: false, message: "No token provided." };

    if (!token) res.status(500).send(msg);

    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
        const key_word = process.env.SECRET;
        jwt.verify(token, key_word, (err, decoded) => {
            const msg = {
                auth: false,
                message: "Failed to authenticate token.",
            };
            if (err) res.status(500).send(msg);
            req.userId = decoded.id;
            next();
        });
    }
};

module.exports = authorization;
