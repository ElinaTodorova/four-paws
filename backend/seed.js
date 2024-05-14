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
    await database.query("delete from animal");
    queries.push(
      database.query(
        "insert into animal(name_animal, image_url, description_category) VALUES ('Dog', 'images/dog1.jpg', 'Explore our wide range of product categories designed to enhance the well-being and happiness of your canine companion. From premium nutrition to stylish accessories and everything in between, we''ve got you covered.'), ('Cat', 'images/cat.png', 'At Four Paws, we understand the unique bond between you and your beloved cat. That''s why we''re dedicated to providing a diverse range of products tailored to meet every need and desire of your furry friend.')"
      )
    );

    await database.query("delete from category_product");
    queries.push(
      database.query(
        "INSERT INTO category_product(category, image_category, animal_id) VALUES ('Food', '/images/dryFoodD.png', 1), ('Care and Hygiene', '/images/hygiene.jpg', 1), ('Toys', '/images/toys.jpg', 1), ('Clothes', '/images/clothes.jpg', 1), ('Accessories', '/images/dogAcc.png', 1), ('Food', '/images/catF.png', 2), ('Care and Hygiene', '/images/hygieneCat.jpg', 2), ('Toys', '/images/catToys.jpg', 2), ('Accessories', '/images/accessoiresC.jpg', 2)"
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

    await database.query("delete from brand");
    queries.push(
      database.query(
        "insert into brand(name_brand,image_brand ) values ('Nutrivia Nature Plus', '/images/logo-nutrivia.jpg');"
      )
    );

    await database.query("delete from product");
    queries.push(
      database.query(
        "insert into product(name_product, product_image, description_product, price, unity,animal_id, category_product_id, isSecondHand, brand_id) VALUES ('Croquettes Naturelles au Canard Frais pour Chien de Toutes Races', '/images/Nutrivia - Nature - Canard - Chien.jpg' ,'Aliment complet.Croquettes naturelles de très haute qualité sans céréales pour le bien être au naturel des chiens adultes de toutes races, à partir de 12 mois.Aliment complet au canard frais, formulé pour une digestion facile et une bonne fonction hépatique, enrichi avec des probiotiques et des antioxydants pour une meilleure immunité.Nutrivia Nature Plus est formulé:Sans additifs.Sans conservateurs.Sans ogm', '55.60', 'Euros', 1, 1, False, 1), ('Croquettes Naturelles au Poulet Frais pour Chien de Toutes Races', '/images/nutrivia-poulet-dog', 'Aliment complet.Croquettes naturelles de très haute qualité sans céréales pour le bien être au naturel des chiens adultes de toutes races, à partir de 12 mois.Aliment complet au poulet frais, formulé pour une digestion facile et une bonne fonction hépatique, enrichi avec des probiotiques et des antioxydants pour une meilleure immunité.', '56.70', '$', 1,false, 1);"
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
