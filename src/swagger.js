// const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Melali API",
      version: "1.0.0",
      description: "Melali API",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

// const specs = swaggerJsdoc(options);

module.exports = options;
