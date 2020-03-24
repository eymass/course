import passport from 'passport';
import LocalStrategy from 'passport-local';

export const password = () => (req, res, next) =>
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err && err.param) {
      return res.status(400).json(err);
    } else if (err || !user) {
      return res.status(401).end();
    }
    req.logIn(user, { session: false }, err => {
      if (err) return res.status(401).end();
      next();
    });
  })(req, res, next);

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (email, password, done) => {
      console.log('p.passwordStrategy Begin...');
      try {
        console.log('p.passwordStrategy find user ' + email);
        getDefaultResponse({ email, name: 'user' }, done, { email, password });
      } catch (e) {
        console.log('password catch: ' + JSON.stringify(e));
        return null;
      }
    }
  )
);

export const getDefaultResponse = (user, done) => done(null, user);
