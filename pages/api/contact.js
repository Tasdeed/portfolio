require("dotenv").config();

const contact = (req, res) => {
  let nodemailer = require("nodemailer");
  const PASSWORD = process.env.password;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "tasdeed6.hossain@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "tasdeed6.hossain@gmail.com",
    to: "thossai4@binghamton.edu",
    subject: req.body.subject,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}, ${req.body.name}, ${req.body.number}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).json("sent email!");
};

export default contact;
