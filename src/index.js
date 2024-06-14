const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = require("./swagger");
const specs = swaggerJsdoc(swaggerOptions);

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");

const app = express();
const process = require("process");

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/destinations", destinationRoutes);
app.use("/schedule", scheduleRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
