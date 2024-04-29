const AbstractManager = require("./AbstractManager");

class TypeAnimalManager extends AbstractManager {
  constructor() {
    super({ table: "animal" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(animal) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where name_animal = ?`,
      [animal]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }
}

module.exports = TypeAnimalManager;
