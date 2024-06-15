<<<<<<< HEAD
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
 *
 *     GeneralResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Operation successful
 *         data:
 *           type: object
 *           example: {}
 *
 *     GetAllDestinationsResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/GeneralResponse'
 *         - type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Destination'
 *
 *     GetDestinationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/GeneralResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/Destination'
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
 *               $ref: '#/components/schemas/GetAllDestinationsResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
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
 *               $ref: '#/components/schemas/GetDestinationResponse'
 *       404:
 *         description: Destination not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 */

const express = require("express");
const router = express.Router();

const destinationController = require("../controllers/destinationController");

router.get("/", destinationController.getAllDestinations);
router.get("/:id", destinationController.getDestination);

module.exports = router;
=======
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
 * 
 *     GeneralResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Operation successful
 *         data:
 *           type: object
 *           example: {}
 * 
 *     GetAllDestinationsResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/GeneralResponse'
 *         - type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Destination'
 * 
 *     GetDestinationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/GeneralResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/Destination'
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
 *               $ref: '#/components/schemas/GetAllDestinationsResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
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
 *               $ref: '#/components/schemas/GetDestinationResponse'
 *       404:
 *         description: Destination not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralResponse'
 */

const express = require('express');
const router = express.Router();

const destinationController = require('../controllers/destinationController');

// Menggunakan '/:index' sebagai bagian dari path untuk endpoint getDestination
router.get('/:index', destinationController.getDestination);
router.get('/', destinationController.getAllDestinations); // Tetap mempertahankan route sebelumnya

module.exports = router;
>>>>>>> bfebff1dd24cfc45650e1168f7492062fcb4ae17
