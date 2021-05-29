const mongoose = require("mongoose");
const mailer = require("../mailer/mailer");
const uniqueValidator = require("mongoose-unique-validator");

const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validate: [validateEmail, "Email inválido"], // A nivel mongoose
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/], // A nivel Mongo
    },
    password: {
        type: String,
        required: true,
    },
    verificado: {
        type: Boolean,
        default: false,
    },
});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.enviarEmailVerificacion = function (cb) {
    const email_destino = this.email;
    const mailOptions = {
        from: "no-reply@ecommerce.com",
        to: email_destino,
        subject: "Verificación de cuenta",
        html:
            '<p>Haga click en el enlace <a href="http://localhost:4000/api/users/confirmation/' +
            this._id +
            '">here</a> para resetear su contraseña.</p>',
    };

    mailer.sendMail(mailOptions, (err) => {
        if (err) return console.log(err.message);

        console.log("Se mandó email de verificación");
    });
};

module.exports = mongoose.model("User", UserSchema);
