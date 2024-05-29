const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Melali API",
      version: "1.0.0",
      description: "Melali API",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    components: {
      schemas: {
        Auth: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              description: "User email",
            },
            password: {
              type: "string",
              description: "User password",
            },
          },
        },
        User: {
          type: "object",
          required: ["id", "name", "email"],
          properties: {
            id: {
              type: "string",
              description: "User ID",
            },
            name: {
              type: "string",
              description: "User name",
            },
            email: {
              type: "string",
              description: "User email",
            },
          },
        },

      },
    },

  },
  apis: ["./routes/*.js"],
};


module.exports = options;