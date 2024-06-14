/**
 * @swagger
 * tags:
 *   name: Schedule
 *   description: Schedule endpoints
 * components:
 *   schemas:
 *     ScheduleRequest:
 *       type: object
 *       properties:
 *         location:
 *           type: integer
 *           example: 1
 *         category:
 *           type: integer
 *           example: 2
 *         cost:
 *           type: integer
 *           example: 100
 *         foodHalal:
 *           type: boolean
 *           example: true
 *     ScheduleResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         schedule:
 *           type: number
 *           example: 4.5
 *
 * /schedule:
 *   post:
 *     summary: Get schedule
 *     description: Get a schedule based on the input parameters.
 *     tags: [Schedule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ScheduleRequest'
 *     responses:
 *       200:
 *         description: Schedule generated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ScheduleResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ScheduleResponse'
 */

const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');
router.post('/', scheduleController.getSchedule);

module.exports = router;
