const tables = require("../tables");

const read = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const param = req.params.animal;
    const idCategory = req.params.id;
    const products = await tables.product.read(param, idCategory);

    // Respond with the items in JSON format
    res.json(products);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  read,
  // read,
  // edit,
  // add,
  // destroy,
};
