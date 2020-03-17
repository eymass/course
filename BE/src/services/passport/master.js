import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { masterKey } from '../../config';

export const master = () => passport.authenticate('master', { session: false });

passport.use(
  'master',
  new BearerStrategy((token, done) => {
    if (token === masterKey) {
      done(null, {});
    } else {
      done(null, false);
    }
  })
);
