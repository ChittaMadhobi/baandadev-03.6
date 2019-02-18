const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const passport = require('passport');

const needLogin = require('../../middlewares/requireLogin');

// @route   POST api/finance/stripe
// @desc    Getting payment from stripe
// @access  Private (needLogin middleware contorls access)

//router.post('/stripe', needLogin, async (req, res) => {
router.post(
  '/stripe',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log('req.user : ' + JSON.stringify(req.user));
    console.log('req.body : ' + JSON.stringify(req.body));

    // const charge = await stripe.charges.create({
    //   amount: 700,
    //   currency: 'usd',
    //   description: '$7 for 5 credits',
    //   source: req.body.id
    // });

    stripe.charges
      .create({
        amount: 700,
        currency: 'usd',
        description: '$7 for 5 credits',
        source: req.body.token.id
      })
      .then(res => console.log('res: ' + JSON.stringify(res)))
      .catch(err => console.log('err: ' + JSON.stringify(err)));

    //console.log('Returned from stripe - charge : ' + JSON.stringify(charge));
    // Due to passport, the req.user has the user data.
    // However, in our  case it would be far more complext with other logic per design
    // req.user.credits += 7; // remember to remove the hardcoded value with req value
    // Make a findOne and sace in DB after the logic
    // then res.send(user) appropriately.
  }
);

module.exports = router;
