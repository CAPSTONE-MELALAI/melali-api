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
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: User created successfully
 *         data:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *               example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *             uid:
 *               type: string
 *               example: "abc123"
 *             username:
 *               type: string
 *               example: johndoe
 *             email:
 *               type: string
 *               example: johndoe@example.com
 *             phoneNumber:
 *               type: string
 *               example: +6281234567890
 *             createdAt:
 *               type: string
 *               format: date-time
 *               example: "2024-05-27T07:21:45.000Z"
 *             updatedAt:
 *               type: string
 *               format: date-time
 *               example: "2024-05-27T07:21:45.000Z"
 *
 *     LoginResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Login successful
 *         data:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *               example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *             uid:
 *               type: string
 *               example: "abc123"
 *             email:
 *               type: string
 *               example: johndoe@example.com
 *             username:
 *               type: string
 *               example: johndoe
 *             phoneNumber:
 *               type: string
 *               example: +6281234567890
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with username, email, password, confPassword, phoneNumber.
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Password dan Confirm Password tidak cocok"
 *                 data:
 *                   type: object
 *                   example: {}
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Email atau password salah"
 *                 data:
 *                   type: object
 *                   example: {}
 *       403:
 *         description: Permission denied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Permission denied"
 *                 data:
 *                   type: object
 *                   example: {}
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Firestore error: <error_message>"
 *                 data:
 *                   type: object
 *                   example: {}
 */

const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/authController.js");

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);

module.exports = router;
