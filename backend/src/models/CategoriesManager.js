const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "category_product" });
  }

  async readAllDogs() {
    const [rows] = await this.database.query(
      `select * from ${this.table} where animal_id = 1`
    );

    return rows;
  }

  async readAllCats() {
    const [rows] = await this.database.query(
      `select * from ${this.table} where animal_id = 2`
    );

    return rows;
  }
}

module.exports = CategoriesManager;
