const nodemailer = require('nodemailer');
const keys = require('../config/keys');

const confirmMail = (req, rand) => {
  console.log('reached confirmMail');
  let toEmail = req.body.email;
  let link =
    req.protocol +
    '://' +
    req.get('host') +
    '/api/users/verify?id=' +
    rand +
    '&email=' +
    toEmail;
  let htmlLink =
    'Hello, <b>Welcome to Banda</b>. <br> Please Click the link to verify your email for Baanda Registration with 10 days of receiving it<br>' +
    '<a href="' +
    link +
    '"> Click to verify </a>';
  var outcome = true;

  console.log(
    ' In ConfirmMail htmllink = ' + htmlLink + '  toEmail: ' + toEmail
  );

  // NOTE: auth user and pass should eventually come from config variables.
  var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: keys.emailID,
      pass: keys.emailPassKey
    }
  });

  var mailOptions = {
    from: keys.emailID,
    to: toEmail,
    subject: 'Baanda Email Verification & Welcome',
    //text: 'That was easy -- Trying once  again!'
    html: htmlLink
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sendmail : ' + error);
      outcome = false;
    } else {
      console.log('Message %s sent: %s ', info.messageId, info.response);
    }
  });

  return outcome;

};

module.exports = confirmMail;
