const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Company = require("../models/compModel");
const Employee = require("../models/empModel");
const Restaurant = require("../models/restModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB connection successful!"));

// READ JSON FILE
const employees = JSON.parse(
	fs.readFileSync(`${__dirname}/employees.json`, "utf-8")
);
const restaurants = JSON.parse(
	fs.readFileSync(`${__dirname}/restaurants.json`, "utf-8")
);
const companies = JSON.parse(
	fs.readFileSync(`${__dirname}/companies.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
	try {
		await Company.create(companies);
		await Employee.create(employees, { validateBeforeSave: false });
		await Restaurant.create(restaurants);
		console.log("Data successfully loaded!");
	} catch (err) {
		console.log(err);
	}
	process.exit();
};

const deleteData = async () => {
	try {
		await Company.deleteMany();
		await Employee.deleteMany();
		await Restaurant.deleteMany();
		console.log("Data successfully deleted!");
	} catch (err) {
		console.log(err);
	}
	process.exit();
};

if (process.argv[2] === "--import") {
	importData();
} else if (process.argv[2] === "--delete") {
	deleteData();
}
