const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  try {
    const user = jwt.verify(token, process.env.APP_SECRET);
    req.user = user;
    return next();
  } catch (err) {
    res.clearCookie("access_token");
    return res.redirect("/");
  }
};

module.exports = {
  hashPassword,
  verifyToken,
};
