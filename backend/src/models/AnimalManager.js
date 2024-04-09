const AbstractManager = require("./AbstractManager");

class TypeAnimalManager extends AbstractManager {
  constructor() {
    super({ table: "animal" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = TypeAnimalManager;
