const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const animalControllers = require("./controllers/animalControllers");
const dogCategoryControllers = require("./controllers/dogCategoryControllers");
const categoriesControllers = require("./controllers/categoriesControllers");

// Route to get a list of items
router.get("/animals", animalControllers.browse);
router.get("/categoriesDog", categoriesControllers.browseDogs);
router.get("/categoriesCat", categoriesControllers.browseCats);
router.get("/catalog", dogCategoryControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
