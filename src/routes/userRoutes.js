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
const router = express.Router();
// const UserController = require("../controllers/userController.js");

// router.post("/", UserController.createNewUser);
// router.get("/", UserController.getAllUsers);
// router.patch("/:id", UserController.updateUser);

module.exports = router;
