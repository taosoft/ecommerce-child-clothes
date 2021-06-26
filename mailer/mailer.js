const nodemailer = require("nodemailer");

// module.exports = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//         user: "karley33@ethereal.email",
//         pass: "GzVvrgfN7TFGtwK6eU",
//     },
// });

module.exports = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_PASSWORD,
    },
});
