const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
require("dotenv/config");

const usersRouter = require("./routes/users");
const salesRouter = require("./routes/sales");
const productRouter = require("./routes/products");
const stockRouter = require("./routes/stock");

const app = express();

if (process.env.ENV_NODE == "development") {
    let corsOptions = {
        origin: `http://localhost:${process.env.PORT}`,
    };
    app.use(cors(corsOptions));
}

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/sales", salesRouter);
app.use("/api/products", productRouter);
app.use("/api/stock", stockRouter);

if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

// Connection to MongoDB
mongoose.Promise = bluebird;
const url = process.env.DB_CONNECTION;
const opts = {
    useNewUrlParser: true,
    connectTimeoutMS: 20000,
    useUnifiedTopology: true,
};

mongoose
    .connect(url, opts)
    .then(() => {
        console.log(`Succesfully Connected to Mongodb...`);
    })
    .catch((e) => {
        console.log(`Error Connecting to Mongodb...`), console.log(e);
    });

module.exports = app;
