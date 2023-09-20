const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const AppError = require("./utils/appError");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.all("*", (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
