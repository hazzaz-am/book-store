const Order = require("./order.model");

// create new orders
const createOrder = async (req, res) => {
	try {
		const newOrder = await Order(req.body);
		const saveOrder = await newOrder.save();
		res.status(201).json(saveOrder);
	} catch (error) {
		console.error("Error Creating Order", error);
		res.status(500).json({ message: "Failed to create Order" });
	}
};

// fetch all orders by email
const getOrdersByEmail = async (req, res) => {
	try {
		const { email } = req.params;
		const orders = await Order.find({ email }).sort({ createdAt: -1 });
		if (!orders) {
			return res.status(404).send({ message: "Orders Not Found" });
		}
		res.status(200).json(orders);
	} catch (error) {
		console.error("Error getting all Orders", error);
		res.status(500).json({
			message: "Failed to fetch Orders",
		});
	}
};

module.exports = {
	createOrder,
	getOrdersByEmail,
};
