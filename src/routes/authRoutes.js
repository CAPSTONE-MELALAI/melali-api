/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with username, email, password, and phone number.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignup'
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Invalid request or user already exists
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in an existing user
 *     description: Log in an existing user with email and password.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: User successfully logged in
 *       401:
 *         description: Email or password incorrect
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserSignup:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *         phoneNumber:
 *           type: string
 * 
 *     UserLogin:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 */

const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/authController.js");

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);

module.exports = router;