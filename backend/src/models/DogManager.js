const AbstractManager = require("./AbstractManager");

class DogManager extends AbstractManager {
  constructor() {
    super({ table: "category_product" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = DogManager;
