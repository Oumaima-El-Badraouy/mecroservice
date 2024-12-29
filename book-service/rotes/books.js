const express = require('express');
const Book = require('../models/Book');

const router = express.Router();
/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/books', (req, res) => {
  res.json([{ id: 1, title: 'Book One' }, { id: 2, title: 'Book Two' }]);
});

// Ajouter un livre
router.post('/add', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

// Obtenir tous les livres
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Obtenir un livre par ID
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});

// Supprimer un livre
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
});

module.exports = router;
