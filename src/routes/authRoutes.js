/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 * components:
 *   schemas:
 *     UserSignup:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: johndoe
 *         email:
 *           type: string
 *           format: email
 *           example: johndoe@example.com
 *         password:
 *           type: string
 *           example: Password123!
 *         confPassword:
 *           type: string
 *           example: Password123!
 *         phoneNumber:
 *           type: string
 *           example: +6281234567890
 *
 *     UserLogin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: johndoe@example.com
 *         password:
 *           type: string
 *           example: Password123!
 *
 *     SignupResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         uid:
 *           type: string
 *           example: "abc123"
 *         username:
 *           type: string
 *           example: johndoe
 *         email:
 *           type: string
 *           example: johndoe@example.com
 *         phoneNumber:
 *           type: string
 *           example: +6281234567890
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-05-27T07:21:45.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-05-27T07:21:45.000Z"
 *
 *     LoginResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         uid:
 *           type: string
 *           example: "abc123"
 *         email:
 *           type: string
 *           example: johndoe@example.com
 *         username:
 *           type: string
 *           example: johndoe
 *         phoneNumber:
 *           type: string
 *           example: +6281234567890
 *         age:
 *           type: integer
 *           example: 25
 *         gender:
 *           type: string
 *           example: male
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with username, email, password, confPassword, phoneNumber, gender, and age.
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SignupResponse'
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Email or password incorrect
 *       403:
 *         description: Permission denied
 *       500:
 *         description: Server error
 */

const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/authController.js");

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);

module.exports = router;
