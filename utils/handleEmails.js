const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'jajabor119@gmail.com',
    pass: 'Ranjan10'
  }
});

const handleEmails = req => {
  let addrsArray = req.body.recipient.split(';');
  let addrsArrayTrimmed = addrsArray.map(result => result.trim());
  // For each email in recipiant, snedEmail one byh one.
  let message = '';
  addrsArrayTrimmed.map(emailAddr => {
    console.log('emailAddr: ' + emailAddr);
    message = +sendEmail(emailAddr, req.body.subject, req.body.mailBody);
  });

  return message;
};

function sendEmail(targetEmailAddr, subject, letterBody) {
  let outcome = '';

  var mailOptions = {
    from: 'sarbojit.project@gmail.com',
    to: targetEmailAddr,
    subject: subject,
    //text: 'That was easy -- Trying once  again!'
    html: letterBody
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error: ' + error);
      outcome = 'Error: ' + error;
    } else {
      console.log('Message %s sent: %s ', info.messageId, info.response);
      outcome =
        'Success: ' +
        'Message(' +
        info.messageId +
        ') sent(' +
        info.response +
        ')';
    }
  });

  return outcome;
}

module.exports = handleEmails;
