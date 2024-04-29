const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "category_product" });
  }

  async readAll(animal) {
    const [rows] = await this.database.query(
      `select name_animal, image_url, category, image_category from ${this.table} 
      INNER JOIN animal ON animal.id = ${this.table}.animal_id
      where name_animal = ?`,
      [animal]
    );
    return rows;
  }
}

module.exports = CategoriesManager;
