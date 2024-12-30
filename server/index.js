require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./src/book/book.route");
const ordersRoutes = require("./src/order/order.route");
const usersRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(
	cors({
		origin: [
			"http://localhost:5173",
			"https://book-store-eta-coral.vercel.app",
		],
		credentials: true,
	})
);

// routes
app.use("/api/books", bookRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/auth", usersRoutes);
app.use("/api/admin", adminRoutes);

// mongodb connection
async function main() {
	await mongoose.connect(process.env.DB_URL);

	app.get("/", (_req, res) => {
		res.send({
			message: "Book Store Server is running",
		});
	});
}

main()
	.then(() => console.log("Connected to DB"))
	.catch((err) => console.log(err));

// server connection
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
