// create reusable transporter object using the default SMTP transport
const config = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD_EMAIL,
  },
};

module.exports = { config };
