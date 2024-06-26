const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const animalControllers = require("./controllers/animalControllers");
const categoriesControllers = require("./controllers/categoriesControllers");
// const subcategoriesControllers = require("./controllers/SubcategoriesControllers");
const productControllers = require("./controllers/productControllers");
const userControllers = require("./controllers/userControllers");

const { hashPassword, verifyToken } = require("./services/auth");
// Route to get a list of items
router.get("/animals", animalControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/categories/:animal", categoriesControllers.browse);
router.get("/animals/:animal", animalControllers.read);
// router.get("/catalog/:animal", subcategoriesControllers.read);
router.get("/catalog/:animal/:id", productControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/signup", hashPassword, userControllers.signUp);
router.post("/login", userControllers.login);

/* ************************************************************************* */
router.use(verifyToken);
router.get("/logout", userControllers.logout);
module.exports = router;
