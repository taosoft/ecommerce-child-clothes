const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "karley33@ethereal.email",
        pass: "GzVvrgfN7TFGtwK6eU",
    },
});
