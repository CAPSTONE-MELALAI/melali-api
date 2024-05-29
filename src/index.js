const express = require("express");
const app = express();
const Routes = require("./routes/userRoutes");
const options = require("./swagger");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/melali", Routes);

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
