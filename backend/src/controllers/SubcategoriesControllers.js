// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const products = await tables.subcategory.readAll();
    // Respond with the items in JSON format
    res.json(products);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const params = req.params.animal;
    const animal = params.toLowerCase();
    const subcategory = await tables.subcategory.read(animal);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (subcategory == null) {
      res.sendStatus(404);
    } else {
      res.json(subcategory);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  // add,
  // destroy,
};
