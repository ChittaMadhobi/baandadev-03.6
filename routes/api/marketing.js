const express = require('express');
const router = express.Router();
const passport = require('passport');

// const needLogin = require('../../middlewares/requireLogin'); // Test it out when you have time :)
const processReachout = require('../../processBizLogic/marketing/processReachout');

// @route   POST api/marketing/reachout
// @desc    Getting payment from stripe
// @access  Private (needLogin middleware contorls access)

// router.post('/reachout', needLogin, (req, res) => {    // Test and replace when you have time.
router.post(
  '/reachout',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // console.log('/reachout res.user: ' + JSON.stringify(req.user));
    console.log('/reachout req.body : ' + JSON.stringify(req.body));
    // ===== Return error if the user is not logged in. Remove if needLogin is used as middleware correctly
    // if (!req.user) {
    //   return res.status(401).send({ error: 'You must log in' });
    // }

    // Process - Send mails and save in database

    processReachout(req);
    res.send('OK');
  }
);

router.get('/', (req, res) => {
  console.log('marketing req.body : ' + JSON.stringify(req.query));

  res.send('hello 11d1');
});

module.exports = router;
