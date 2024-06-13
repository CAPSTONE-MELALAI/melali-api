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
const predict = require('./services/predict');

const process = require("process");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/auth", authRoutes);

app.use("/user", userRoutes);

app.use("/destinations", destinationRoutes);

app.post('/predict', async (req, res) => {
  const { location, category, cost, foodHalal } = req.body;

  try {
      const prediction = await predict(location, category, cost, foodHalal);
      res.json({ prediction });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
