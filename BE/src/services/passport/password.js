import passport from 'passport';
import LocalStrategy from 'passport-local';

export const password = () => (req, res, next) =>
  passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log('p.password Begin...');
    if (err && err.param) {
      console.log('p.password err');
      console.log('p.password user ' + JSON.stringify(user));
      return res.status(400).json(err);
    } else if (err || !user) {
      console.log('p.password err ' + JSON.stringify(err));
      console.log('p.password user ' + JSON.stringify(user));
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
