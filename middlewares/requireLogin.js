(module.exports = () => passport.authenticate('jwt', { session: false })),
  (req, res, next) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must log in' });
    }

    next(); // If everything is all right, continue processing.
  };

/*
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      avatar: req.user.avatar,
      isConfirmed: req.user.isConfirmed,
      isActive: req.user.isActive
    });
    //res.json(req.user);
    //res.json({ msg: 'success' });
  }
);

*/
