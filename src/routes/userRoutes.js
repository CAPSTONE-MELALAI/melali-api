/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management endpoints
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         uid:
 *           type: string
 *           example: "1234567890"
 *         username:
 *           type: string
 *           example: "john_doe"
 *         email:
 *           type: string
 *           format: email
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           example: "password123"
 *         phoneNumber:
 *           type: string
 *           example: "+1234567890"
 *         age:
 *           type: integer
 *           example: 30
 *         gender:
 *           type: string
 *           example: "male"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-05-27T07:21:45.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-06-09T10:15:30.000Z"
 */

/**
 * @swagger
 * /user/{email}:
 *   get:
 *     summary: Get user by email
 *     description: Retrieve user information based on the provided email address.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email address of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /user/{email}:
 *   patch:
 *     summary: Update user by email
 *     description: Update user information based on the provided email address.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email address of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "john_doe_updated"
 *               phoneNumber:
 *                 type: string
 *                 example: "+1234567890"
 *               age:
 *                 type: integer
 *                 example: 31
 *               gender:
 *                 type: string
 *                 example: "male"
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const verifyTokenMiddleware = require("../middlewares/authMiddleware");

router.get("/:email", verifyTokenMiddleware, userController.getUser);
router.patch("/:email", verifyTokenMiddleware, userController.updateUser);

module.exports = router;
