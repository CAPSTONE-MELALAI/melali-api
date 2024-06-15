/**
 * @swagger
 * /predict:
 *   post:
 *     summary: Get a tourism recommendation based on userId and tourismId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userIds
 *               - tourismIds
 *             properties:
 *               userIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: Array of user IDs
 *                 example: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 *               tourismIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: Array of tourism IDs
 *                 example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *     responses:
 *       200:
 *         description: Successful response with prediction
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: number
 *                 description: Predicted scores
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

const express = require('express');
const predictController = require('../controllers/predictController');

const router = express.Router();

router.post('/', predictController.predictRatings);

module.exports = router;
