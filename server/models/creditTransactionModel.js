const mongoose = require("mongoose");
const validator = require("validator");

const creditTransactionSchema = new mongoose.Schema({
	employee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Employee",
		required: true,
	},
	restaurant: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Restaurant",
		required: true,
	},
	amount: {
		type: Number,
		required: true,
		validate: {
			validator: function (value) {
				// Validate that transaction amount is non-negative
				return value >= 0;
			},
			message: "Transaction amount must be non-negative",
		},
	},
	transactionDate: {
		type: Date,
		default: Date.now,
	},
});

const CreditTransaction = mongoose.model(
	"CreditTransaction",
	creditTransactionSchema
);

module.exports = CreditTransaction;
