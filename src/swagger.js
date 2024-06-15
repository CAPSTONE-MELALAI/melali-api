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
        url: "https://capstone-melali.et.r.appspot.com/",
        description: "Development server",
      },
      {
        url: "http://localhost:4000/",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  

  // eslint-disable-next-line no-undef
  apis: [`${__dirname}/routes/*.js`]
};

// const specs = swaggerJsdoc(options);

module.exports = options;
