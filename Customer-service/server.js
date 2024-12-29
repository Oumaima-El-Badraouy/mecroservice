const express = require('express');
const connectDB = require('./db');
const customerRoutes = require('./retes/customers');
const swaggerUi = require('swagger-ui-express'); // Swagger UI
const swaggerSpec = require('./swaggerConfig');
const app = express();

require('dotenv').config();

app.use(express.json());
connectDB();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/customers', customerRoutes);

app.listen(5001, () => {
  console.log('Customer service running on port 5000');
});
