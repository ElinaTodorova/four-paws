const bcrypt = require("bcrypt");

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;

    const hashPass = await bcrypt.hash(password, 13);

    req.body.hashPass = hashPass;

    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  hashPassword,
};
