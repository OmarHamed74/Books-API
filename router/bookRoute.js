var express = require("express");
var router = express.Router();
var bookCon = require("../controller/bookController");

router.get("/books", bookCon.getBookList);
router.get("/books/details/:bookId", bookCon.getBookDetails);
router.post("/books/save", bookCon.saveBook);
router.put("/books/update", bookCon.updateBook);
router.delete("/books/delete/:bookId", bookCon.deleteBook);

module.exports = router;
