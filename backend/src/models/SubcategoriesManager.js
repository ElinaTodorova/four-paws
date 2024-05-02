const AbstractManager = require("./AbstractManager");

class DogManager extends AbstractManager {
  constructor() {
    super({ table: "subcategory" });
  }

  async read(animal) {
    const [rows] = await this.database.query(
      `select subcategory.subcategory_name, subcategory_image.image_url, category_product.category, name_animal from ${this.table} INNER JOIN subcategory_image ON subcategory.id = subcategory_image.id INNER JOIN category_product ON category_product.id = subcategory.category_id INNER JOIN animal ON animal.id = category_product.animal_id WHERE name_animal = ?`,
      [animal]
    );

    return rows;
  }
}

module.exports = DogManager;
