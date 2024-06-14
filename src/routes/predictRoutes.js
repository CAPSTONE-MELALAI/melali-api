/**
 * @swagger
 * /predict:
 *   post:
 *     summary: Get a tourism recommendation based on userId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: ID of the user
 *                 example: 1
 *     responses:
 *       200:
 *         description: Successful response with prediction
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                   description: ID of the user
 *                 tourismId:
 *                   type: integer
 *                   description: ID of the tourism (static)
 *                 prediction:
 *                   type: number
 *                   description: Predicted score
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

const express = require('express');
const predictController = require('../controllers/predictController');

const router = express.Router();

router.post('/', predictController.predictController);

module.exports = router;
