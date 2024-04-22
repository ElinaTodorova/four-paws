const AbstractManager = require("./AbstractManager");

class DogManager extends AbstractManager {
  constructor() {
    super({ table: "subcategory" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select subcategory.subcategory_name, subcategory_image.image_url, category_product.category from ${this.table} INNER JOIN subcategory_image ON subcategory.id = subcategory_image.id INNER JOIN category_product ON category_product.id = subcategory.category_id`
    );

    return rows;
  }
}

module.exports = DogManager;
