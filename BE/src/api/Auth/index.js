import { Router } from 'express';
import { login } from './controller';
import { password } from '../../services/passport';

const router = new Router();

router.post('/', password(), login);

export default router;
