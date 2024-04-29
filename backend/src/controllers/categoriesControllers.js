// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const params = req.params.animal;
    const animal = params.toLowerCase();
    const products = await tables.category_product.readAll(animal);

    // Respond with the items in JSON format
    res.json(products);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  // read,
  // edit,
  // add,
  // destroy,
};
