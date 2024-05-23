const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const nodemailer = require("nodemailer");
const { config } = require("../mailer/config");

// Import access to database tables
const tables = require("../tables");
// The A of BREAD - Add (Create) operation
const signUp = async (req, res, next) => {
  // Extract the item data from the request body
  const user = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.user.create(user);

    const transporter = nodemailer.createTransport(config);

    const message = {
      from: '"Four Paws 🐾" <fourpaws196@gmail.com>', // sender address
      to: `${user.email}`, // list of receivers
      subject: `Welcome, ${user.username}`, // Subject line
      text: "Successfully Register with us.", // plain text body
      html: "<b>Successfully Register with us.</b>", // html body
    };
    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    transporter
      .sendMail(message)
      .then((info) => {
        return res.status(201).json({
          msg: "you should receive an email",
          info: info.messageId,
          idUser: insertId,
        });
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const login = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const { email, password } = req.body;
    const user = await tables.user.read(email);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (user === null) {
      res.sendStatus(422);
    }

    const match = await bcrypt.compare(password, user.hashed_password);

    if (match) {
      delete user.hashed_password;
      const token = await jwt.sign({ user }, process.env.APP_SECRET, {
        expiresIn: "1h",
      });
      res
        .cookie("access_token", token, {
          httpOnly: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
          // maxAge: 3600000,
        })
        .json({
          user,
        });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const logout = async (req, res) => {
  res.cookie("access_token", "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 1,
  });

  return res.status(204).json({ message: "Logout successful" });
};

module.exports = {
  signUp,
  login,
  logout,
};
