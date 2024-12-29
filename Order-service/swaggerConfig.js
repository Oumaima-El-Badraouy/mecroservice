const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Microservices API',
      version: '1.0.0',
      description: 'API documentation for Book, Customer, and Order services',
    },
    servers: [
      {
        url: 'http://localhost:9001', // Update this to match your service
        description: 'order Service',
      },
    ],
  },
  apis: ['./rotes/*.js'], // Path to your route files
};

module.exports = swaggerJsdoc(swaggerOptions);
