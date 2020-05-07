import { sign } from '../../services/jwt';
import { success } from '../../services/response/';

export const login = ({ user }, res, next) =>
  sign(user.id)
    .then(token => ({ token: 'TESTM', user }))
    .then(success(res, 201))
    .catch(next);
