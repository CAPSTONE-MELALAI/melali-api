/**
 * @swagger
 * tags:
 *   name: Prediction
 *   description: Endpoints for making predictions
 * components:
 *   schemas:
 *     PredictionInput:
 *       type: object
 *       properties:
 *         location:
 *           type: integer
 *           example: 1
 *         category:
 *           type: integer
 *           example: 2
 *         cost:
 *           type: number
 *           example: 100.0
 *         foodHalal:
 *           type: boolean
 *           example: true
 *     PredictionResponse:
 *       type: object
 *       properties:
 *         prediction:
 *           type: number
 *           example: 0.75
 * 
 * /predict:
 *   post:
 *     summary: Make a prediction
 *     description: Make a prediction based on location, category, cost, and food halal status.
 *     tags: [Prediction]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PredictionInput'
 *     responses:
 *       200:
 *         description: Prediction made successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PredictionResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error making prediction
 */


const express = require('express');
const router = express.Router();
const predictController = require('../controllers/predictController');

router.post('/predict', predictController.predictHandler);

module.exports = router;
