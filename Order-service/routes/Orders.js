const express = require('express');
const Order = require('../Models/Order');
const axios = require('axios'); 

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
router.get('/order', (req, res) => {
  res.json([{ id: 1, title: 'order One' }, { id: 2, title: 'Book Two' }]);
});
// Ajouter une commande
router.post('/add', async (req, res) => {
  const { customerId, bookId } = req.body;

  try {
    // Vérifier si le client existe
    const customerResponse = await axios.get(`http://localhost:5000/customers/${customerId}`);
    const bookResponse = await axios.get(`http://localhost:3000/books/${bookId}`);

    if (!customerResponse.data || !bookResponse.data) {
      return res.status(404).json({ message: "Client ou livre introuvable" });
    }

    const order = new Order({ customerId, bookId });
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtenir toutes les commandes
router.get('/', async (req, res) => {
  const orders = await Order.find().populate('customerId bookId');
  res.json(orders);
});

// Obtenir une commande par ID
router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id).populate('customerId bookId');
  if (!order) {
    return res.status(404).json({ message: "Commande introuvable" });
  }
  res.json(order);
});

// Supprimer une commande
router.delete('/:id', async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: 'Commande supprimée' });
});

module.exports = router;



/**
 * @swagger
 * /books:
 *   get:
 *     summary: Liste des livres
 *     description: Récupère tous les livres de la base de données.
 *     responses:
 *       200:
 *         description: Liste des livres.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 */
app.get('/books', (req, res) => {
  res.json([{ id: 1, title: 'Book Title' }]);
});
