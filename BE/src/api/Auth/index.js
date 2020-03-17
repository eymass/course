import { Router } from 'express';
import { login } from './controller';
import { password } from '../../services/passport';

const router = new Router();

router.post('/', password(), login);
router.get('/', (req, res) => res.send('Keep it simple but powerful'));

export default router;
