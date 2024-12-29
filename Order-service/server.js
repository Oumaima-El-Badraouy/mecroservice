const express = require('express');
const connectDB = require('./db');
const orderRoutes = require('./routes/Orders');
const swaggerUi = require('swagger-ui-express'); // Swagger UI
const swaggerSpec = require('./swaggerConfig');
const app = express();

require('dotenv').config();

app.use(express.json());
connectDB();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/orders', orderRoutes);

app.listen(9001, () => {
  console.log('Order service running on port 9001');
});
