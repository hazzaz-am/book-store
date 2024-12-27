const Book = require("./book.model");

// add new book
const addNewBook = async (req, res) => {
	try {
		const newBook = await Book({ ...req.body });
		await newBook.save();
		res.status(201).send({ message: "New Book added successfully" });
	} catch (error) {
		res.status(500).json({ message: "Failed to add a new book" });
	}
};

// find one book by id
const getOneBook = async (req, res) => {
	try {
		const book = await Book.findById(req.params.id);
		if (!book) {
			res.status(404).json({ message: "Book not found" });
		}
		res.status(200).json(book);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch book" });
	}
};

// get all books
const getAllBooks = async (req, res) => {
	try {
		const books = await Book.find().sort({ createdAt: -1 });
		res.status(200).json(books);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch books" });
	}
};

// update book
const updateBook = async (req, res) => {
	try {
		const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!updatedBook) {
			res.status(404).json({ message: "Book not found" });
		}
		res
			.status(200)
			.send({ message: "Book updated successfully", book: updatedBook });
	} catch (error) {
		res.status(500).json({ message: "Failed to update book" });
	}
};

// delete a book
const deleteOneBook = async (req, res) => {
	try {
		const deletedBook = await Book.findByIdAndDelete(req.params.id);

		if (!deletedBook) {
			res.status(404).json({ message: "Book not found" });
		}

		res.status(200).send({ message: "Book deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Failed to delete book" });
	}
};

module.exports = {
	addNewBook,
	getAllBooks,
	getOneBook,
	updateBook,
	deleteOneBook,
};
