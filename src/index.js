const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = require("./swagger");
const specs = swaggerJsdoc(swaggerOptions);

const authRoutes = require("./routes/authRoutes");

const process = require("process");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Mount authentication routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
