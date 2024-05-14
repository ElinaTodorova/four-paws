const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  async create(user) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (username, email, hashed_password) values (?, ?, ?)`,
      [user.username, user.email, user.hashPass]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }
}

module.exports = UserManager;
