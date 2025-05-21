import { Book } from "../models/Book.js";

export const createBook = async (req, res) => {
  const { title, author, rating, pagesCount, summary, imageUrl, available } =
    req.body;
    if(!title || !author){
        res.status(400).send({message: "Title and author fields are required"})
    }

  const newBook = await Book.create({
    title,
    author,
    rating,
    pagesCount,
    summary,
    imageUrl,
    available,
  });
  res.json(newBook);
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, rating, pagesCount, summary, imageUrl, available } =
    req.body;

  const book = await Book.findOne({
    where: {
      id,
    },
  });

  await book.update({
    title,
    author,
    rating,
    pagesCount,
    summary,
    imageUrl,
    available,
  });
  await book.save();

  res.json(book);
};

export const findBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  if (!book) 
    res.status(404).send({message: "Book not found"});
  res.json(book);
};

export const findBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);
  await book.destroy();
  res.send(`Borrando libro con id: ${id}`);
};
