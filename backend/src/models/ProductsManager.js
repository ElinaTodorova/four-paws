const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "product" });
  }

  async read(animal, id) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select ${this.table}.name_product, ${this.table}.product_image, ${this.table}.description_product, ${this.table}.price, ${this.table}.unity, ${this.table}.isSecondHand, brand.name_brand, brand.image_brand from ${this.table} INNER JOIN brand ON brand.id = ${this.table}.brand_id INNER JOIN animal ON animal.id = ${this.table}.animal_id WHERE animal.name_animal = ? AND ${this.table}.category_product_id = ?`,
      [animal, id]
    );

    // Return the array of items
    return rows[0];
  }
}

module.exports = ProductManager;
