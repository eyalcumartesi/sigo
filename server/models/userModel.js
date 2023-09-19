const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "We need your name!"],
	},
	lastName: {
		type: String,
		required: [true, "We need your name!"],
	},
	email: {
		type: String,
		required: [true, "Please provide your email"],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, "Please provide a valid email"],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	worksAt: {
		type: mongoose.Schema.ObjectId,
		ref: "Corporation",
		required: [true, "Review must belong to a tour."],
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
		required: [true, "Review must belong to a user"],
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		minlength: 8,
		select: false,
	},
	passwordConfirm: {
		type: String,
		required: [true, "Please confirm your password"],
		validate: {
			// This only works on CREATE and SAVE!!!
			validator: function (el) {
				return el === this.password;
			},
			message: "Passwords are not the same!",
		},
	},
	passwordChangedAt: Date,
	passwordResetToken: String,
	passwordResetExpires: Date,
	active: {
		type: Boolean,
		default: true,
		select: false,
	},
});
