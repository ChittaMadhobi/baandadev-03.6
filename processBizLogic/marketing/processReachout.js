// Send emails and store in database

const handleEmails = require('../../utils/handleEmails');

const Reachout = require('../../models/marketing/reachout');

module.exports = function processReachout(req) {
  let outcome = true;
  console.log('reached processReachout');
  // ===== Send all emails one by one.
  handleEmails(req);

  const newReachoutRec = {
    title: req.body.title,
    subject: req.body.subject,
    reachoutType: req.body.reachoutType,
    recipiants: req.body.recipient,
    emailBody: req.body.mailBody
  };

  console.log('newReachoutRec :' + JSON.stringify(newReachoutRec));
  //   let newReachout = new Reachout({
  //     baandaid: req.user.baandaid,
  //     reachoutRecs: []
  //   });

  // // Simplifying chaining
  Reachout.findOne({ baandaid: req.user.baandaid })
    .then(reachout => {
      if (!reachout) {
        console.log(
          'No Reachout record found for baandaid : ' + req.user.baandaid
        );
        const newReachout = new Reachout({
          baandaid: req.user.baandaid,
          reachoutRecs: [newReachoutRec]
        });
        newReachout
          .save()
          .then(reachout => console.log('post save : ' + reachout))
          .catch(err => console.log('post save err: ' + err));
      } else {
        // Update Push
        console.log('Found a record with baandaid: ' + req.user.baandaid);
        // Reachout.findOneAndUpdate(
        //   { baandaid: req.user.baandaid },
        //   { $push: { reachoutRecs: newReachoutRec } }
        // )
        //   .then(reachout => console.log('push success: ' + reachout))
        //   .catch(err => console.log('push error : ' + err));
        reachout.reachoutRecs.push(newReachoutRec);
        reachout
          .save()
          .then()
          .catch(err => console.log('push error : ' + err));
      }
    })
    .catch(err => console.log('processReachout findOne error: ' + err));

  return outcome;
};
