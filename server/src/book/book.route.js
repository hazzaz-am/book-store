const express = require("express");
const { addNewBook, getAllBooks, getOneBook, updateBook, deleteOneBook } = require("./book.controller");
const verifyAdminToken = require("../middlewares/verifyAdminToken");
const router = express.Router();

router.post("/add-book", verifyAdminToken, addNewBook);
router.get("/", getAllBooks);
router.get("/:id", getOneBook);
router.put("/edit/:id", verifyAdminToken, updateBook);
router.delete("/:id", verifyAdminToken, deleteOneBook);

module.exports = router;
