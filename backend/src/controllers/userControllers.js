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

module.exports = {
  signUp,
};
