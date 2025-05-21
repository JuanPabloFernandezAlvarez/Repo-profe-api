import { Router } from "express";

import { createBook, deleteBook, findBook, findBooks, updateBook } from "../services/book.service.js";

const router = Router();

router.get("/book", findBooks);

router.get("/book/:id", findBook);

router.post("/books", createBook);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);


export default router;