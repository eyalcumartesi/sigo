const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	photo: {
		type: String,
		default: "default.jpg",
	},
	email: {
		type: String,
		required: [true, "Please provide your email"],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, "Please provide a valid email"],
	},
	company: {
		type: String,
	},
	creditBalance: {
		type: Number,
		default: 0,
		validate: {
			validator: function (value) {
				// Validate that credit balance is non-negative
				return value >= 0;
			},
			message: "Credit balance must be non-negative",
		},
	},
	password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
