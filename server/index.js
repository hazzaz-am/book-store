require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(
	cors({
		origin: ["http://localhost:5173"],
		credentials: true,
	})
);

// routes
const bookRoutes = require("./src/book/book.route");
app.use("/api/books", bookRoutes);

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
