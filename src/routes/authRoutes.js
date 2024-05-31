/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with username, email, password, and phone number.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Invalid request or user already exists
 */

const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/authController.js");

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);

module.exports = router;
