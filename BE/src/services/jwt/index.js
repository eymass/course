import jwt from 'jsonwebtoken';
import Promise from 'bluebird';
import { jwtSecret, tokenExpiryTime } from '../../config';

const jwtSign = Promise.promisify(jwt.sign);

export const sign = (id, options = { expiresIn: tokenExpiryTime }, method = jwtSign) =>
  method({ id }, jwtSecret, options);
