/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Aou endpoints to manage user
 */

/**
 * @swagger
 *  /user:
 *    get:
 *      summary: Get all users
 *      tags: [Users]
 *      responses:
 *        "200":
 *         description: A JSON array of user objects
 *        content:
 *         application/json:
 *         schema:
 *         
 */
const express = require("express");

const UserController = require("../controllers/userController.js");

const router = express.Router();

// Create - POST
router.post("/", UserController.createNewUser);

// Read - GET
router.get("/", UserController.getAllUsers);

// Update - patch
router.patch("/:id", UserController.updateUser);

module.exports = router;
