const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    // res.redirect('/surveys');
    res.json(req.user);
  }
);

app.get(
  '/auth/github',
  passport.authenticate('github', {
    scope: ['profile', 'email']
  })
);

app.get(
'/auth/github/callback',
passport.authenticate('github'),
(req, res) => {
  // res.redirect('/surveys');
  res.json(req.user);
}
);

}
