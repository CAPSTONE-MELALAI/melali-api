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
// const predictRoutes = require("./routes/predictRoutes");

const app = express();
const process = require("process");
// const loadModel = require("./services/loadModel");


app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/destinations", destinationRoutes);
// app.use("/predict", predictRoutes);

// app.use((req, res, next) => {
//   req.models = {model};
//   next();
// });
// app.use("/schedule", scheduleRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  // try {
  //   const model = await loadModel();
  //   app.model = model; // Attach the model to the app object
  //   console.log('Model loaded and attached to app');
  // } catch (error) {
  //   console.log('Error loading model:', error);
  // }
});
