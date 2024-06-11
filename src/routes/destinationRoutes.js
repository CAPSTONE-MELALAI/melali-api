/**
 * @swagger
 * tags:
 *   name: Destinations
 *   description: API endpoints for managing destinations
 * components:
 *   schemas:
 *     Tourism:
 *       type: object
 *       properties:
 *         VisitorFee:
 *           type: string
 *           description: Visitor fee information
 *           example: "$10 per person"
 *     Destination:
 *       type: object
 *       properties:
 *         Tourism:
 *           $ref: '#/components/schemas/Tourism'
 *         uid:
 *           type: string
 *           description: The unique identifier of the destination
 *           example: "dest123"
 *         Description:
 *           type: string
 *           description: A description of the destination
 *           example: "A beautiful beach with crystal clear water."
 *         Category:
 *           type: string
 *           description: The category of the destination
 *           example: "Beach"
 *         Coordinate:
 *           type: string
 *           description: The coordinates of the destination
 *           example: "34.0522 N, 118.2437 W"
 *         Price:
 *           type: number
 *           description: The price in local currency
 *           example: 20
 *         GoogleMapsRating:
 *           type: number
 *           description: The Google Maps rating
 *           example: 4.5
 *         GoogleReviewsCount:
 *           type: number
 *           description: The number of Google reviews
 *           example: 1234
 *         Place:
 *           type: string
 *           description: The name of the place
 *           example: "Santa Monica Beach"
 *         Source:
 *           type: string
 *           description: The source URL
 *           example: "https://example.com/destinations/santa-monica-beach"
 *         Location:
 *           type: string
 *           description: The location address of the destination
 *           example: "123 Beach Dr, Santa Monica, CA"
 *       required:
 *         - uid
 *         - Description
 *         - Category
 *         - Coordinate
 *         - Price
 *         - GoogleMapsRating
 *         - GoogleReviewsCount
 *         - Place
 *         - Source
 *         - Location
 */

/**
 * @swagger
 * /destinations:
 *   get:
 *     summary: Retrieve all destinations
 *     tags: [Destinations]
 *     responses:
 *       200:
 *         description: List of destinations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Destination'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Error getting destinations: some error message"
 */

/**
 * @swagger
 * /destinations/{id}:
 *   get:
 *     summary: Retrieve a single destination by ID
 *     tags: [Destinations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the destination to retrieve
 *         schema:
 *           type: string
 *           example: "dest123"
 *     responses:
 *       200:
 *         description: Details of the destination
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Destination'
 *       404:
 *         description: Destination not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Destination not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "Error getting destination: some error message"
 */

const express = require("express");
const router = express.Router();

const destinationController = require("../controllers/destinationController");

router.get("/", destinationController.getAllDestinations);
router.get("/:id", destinationController.getDestination);

module.exports = router;
