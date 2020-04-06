import { Router } from 'express';
import { master } from '../../services/passport';
import { profile } from './controller';

const router = new Router();

router.get('/', master(), profile);

export default router;
