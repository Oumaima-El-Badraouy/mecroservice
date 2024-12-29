//  la bibliothèque Express
const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});
app.get('/', (req, res) => {
  res.send('Bienvenue sur ma première application Express.js!');
});

app.post('/submit', (req, res) => {
  res.send('Données soumises avec succès!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Une erreur est survenue!');
});


app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
