const mongoose = require("mongoose");
const validator = require("validator");

const compSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Must have a name"],
			unique: true,
		},
		email: {
			type: String,
			required: [true, "Please provide your email"],
			unique: true,
			lowercase: true,
			validate: [validator.isEmail, "Please provide a valid email"],
		},
		address: {
			type: String,
		},
		employees: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Employee",
			},
		],
		logo: {
			type: String,
			default: "logo-default.jpg",
		},
		password: {
			type: String,
			required: [true, "Please provide a password"],
			minlength: 8,
			select: false,
		},
		passwordChangedAt: Date,
		passwordResetToken: String,
		passwordResetExpires: Date,
		active: {
			type: Boolean,
			default: true,
			select: false,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

const Company = mongoose.model("Company", compSchema);

module.exports = Company;
