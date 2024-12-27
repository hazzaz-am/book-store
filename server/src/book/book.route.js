const express = require("express");
const { addNewBook, getAllBooks, getOneBook, updateBook, deleteOneBook } = require("./book.controller");
const router = express.Router();

router.post("/add-book", addNewBook);
router.get("/", getAllBooks);
router.get("/:id", getOneBook);
router.put("/edit/:id", updateBook);
router.delete("/:id", deleteOneBook);

module.exports = router;
