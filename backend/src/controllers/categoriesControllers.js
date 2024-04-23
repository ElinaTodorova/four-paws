// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browseDogs = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const products = await tables.category_product.readAllDogs();

    // Respond with the items in JSON format
    res.json(products);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseCats = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const products = await tables.category_product.readAllCats();

    // Respond with the items in JSON format
    res.json(products);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browseDogs,
  browseCats,
  // read,
  // edit,
  // add,
  // destroy,
};
