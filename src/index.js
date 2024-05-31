const express = require("express");
const app = express();
const options = require("./swagger");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const specs = swaggerJsdoc(options);
// const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/", authRoutes);


app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
