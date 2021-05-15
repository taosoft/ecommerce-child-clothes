 const jwt = require('jsonwebtoken');
 const config = require('../config').config();
 
 const authorization = function (req, res, next) {
 
     const token = req.headers['x-access-token'] || req.headers['authorization'];
     const msg = {auth: false, message: 'No token provided.'};
     
     if (!token) res.status(500).send(msg);
 
     const sec = process.env.SECRET;
     jwt.verify(token, sec, (err, decoded) => {
        const msg = {auth: false, message: 'Failed to authenticate token.'};
        if (err) res.status(500).send(msg);
        req.userId = decoded.id;
        next();
     });
 }
 
 module.exports = authorization;
 