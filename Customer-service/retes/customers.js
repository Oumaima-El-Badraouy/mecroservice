const express = require('express');
const Customer = require('../models/Customer');

const router = express.Router();

// Ajouter un client
router.post('/add', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtenir tous les clients
router.get('/', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// Obtenir un client par ID
router.get('/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    return res.status(404).json({ message: "Client introuvable" });
  }
  res.json(customer);
});

// Supprimer un client
router.delete('/:id', async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Client supprimé' });
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
app.get('/customer', (req, res) => {
  res.json([{ id: 1, title: ' Title' }]);
});
