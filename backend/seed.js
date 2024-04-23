/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */
    // Generating Seed Data
    // queries.push(
    //   database.query("insert into role(role) values ('admin'), ('guest');")
    // );

    // Optional: Truncate tables (remove existing data)

    await database.query("delete from category_product");
    queries.push(
      database.query(
        "INSERT INTO category_product(category, image_category) VALUES ('Food', '/images/dryFoodD.png'), ('Care and Hygiene', '/images/hygiene.jpg'), ('Toys', '/images/toys.jpg'), ('Clothes', '/images/clothes.jpg'), ('Accessories', '/images/dogAcc.png')"
      )
    );

    await database.query("delete from subcategory_image");
    queries.push(
      database.query(
        "INSERT INTO subcategory_image(image_url) VALUES ('images/croquettes.png'), ('images/treatsDog.png'), ('images/cansDog'), ('images/dogAcc.png'), ('images/shampooDog.jpg'), ('images/dentalSticksDog.jpg')"
      )
    );

    await database.query("delete from subcategory");
    queries.push(
      database.query(
        "INSERT INTO subcategory(subcategory_name, category_id, image_id) VALUES ('Dry Food', 1, 1), ('Treats&Chews', 1, 2), ('Cans/Pouches/Trays', 1, 3), ('Oral care',2, 6)"
      )
    );

    await database.query("delete from role");
    queries.push(
      database.query("insert into role(role) values ('admin'), ('guest');")
    );

    await database.query("delete from animal");
    queries.push(
      database.query(
        "insert into animal(name_animal, image_url) VALUES ('Dog', 'images/dog1.jpg'), ('Cat', 'images/cat.png')"
      )
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
