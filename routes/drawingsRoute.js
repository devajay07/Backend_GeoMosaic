const express = require("express");
const drawingsController = require("../controllers/drawingsController");
const authController = require("../controllers/authController");

const bookRouter = express.Router();

bookRouter
  .route("/")
  .get(authController.protect, drawingsController.getBooks)
  .post(bookController.createBook);

bookRouter
  .route("/:id")
  .get(drawingsController.getAbook)
  .patch(drawingsController.updateBook)
  .delete(
    authController.protect,
    authController.restrictTo("admin", "manager"),
    drawingsController.deleteBook
  );

module.exports = bookRouter;
