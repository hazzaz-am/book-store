const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		address: {
			city: {
				type: String,
				required: true,
			},
			country: String,
			state: String,
			zipcode: String,
		},
		phone: {
			type: String,
			required: true,
		},
		cartItemIds: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Book",
				required: true,
			},
		],
		totalPrice: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);


const Order = mongoose.model("Order", orderSchema);
module.exports = Order