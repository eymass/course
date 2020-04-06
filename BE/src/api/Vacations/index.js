import { Router } from 'express';
import { master } from '../../services/passport';
import { vacations } from './controller';

const router = new Router();

router.get('/', master(), vacations);

export default router;
