const express = require('express');
const connectDB = require('./db');
const bookRoutes = require('./rotes/books');
const swaggerUi = require('swagger-ui-express'); // Swagger UI
const swaggerSpec = require('./swaggerConfig');
const app = express();

require('dotenv').config();

app.use(express.json());
connectDB();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/books', bookRoutes);

app.listen(3001, () => {
  console.log('Book service running on port 3001');
});
