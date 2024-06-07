/**
 * @swagger
 * tags:
 *   name: Destinations
 *   description: API endpoints for managing destinations
 * components:
 *   schemas:
 *     Destination:
 *       type: object
 *       properties:
 *         Tourism:
 *           type: object
 *           properties:
 *             VisitorFee:
 *               type: string
 *               description: Visitor fee information.
 *         uid:
 *           type: string
 *           description: The unique identifier of the destination.
 *         Description:
 *           type: string
 *           description: A description of the destination.
 *         Category:
 *           type: string
 *           description: The category of the destination.
 *         Coordinate:
 *           type: string
 *           description: The coordinates of the destination.
 *         Price:
 *           type: number
 *           description: The price in local currency.
 *         GoogleMapsRating:
 *           type: number
 *           description: The Google Maps rating.
 *         GoogleReviewsCount:
 *           type: number
 *           description: The number of Google reviews.
 *         Place:
 *           type: string
 *           description: The name of the place.
 *         Source:
 *           type: string
 *           description: The source URL.
 *         Location:
 *           type: string
 *           description: The location address of the destination.
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
 *                 type: object
 *       500:
 *         description: Server error
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
 *     responses:
 *       200:
 *         description: Details of the destination
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Destination not found
 *       500:
 *         description: Server error
 */

const express = require("express");
const router = express.Router();

const destinationController = require("../controllers/destinationController");

router.get("/", destinationController.getAllDestinations);
router.get("/:id", destinationController.getDestination);

module.exports = router;
