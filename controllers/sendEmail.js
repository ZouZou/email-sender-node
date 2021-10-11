const nodemailer = require("nodemailer");
const Email = require("../models/email");

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTPHOST,
    port: process.env.SMTPPORT,
    auth: {
      user: process.env.SMTPUSER,
      pass: process.env.SMTPPASS,
    },
  });

  const { email } = req.body;
  // console.log(req.body);
  let info = await transporter.sendMail({
    from: email.from,
    to: email.to,
    subject: email.subject,
    html: email.body,
  });

  res.json(info);
};

module.exports = sendEmail;
