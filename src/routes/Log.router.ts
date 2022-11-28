import { Router } from 'express';
import { getLog } from '../controllers/getLog.controller';
import validateToken from '../models/auth.model';

const router = Router();

router.get('/', validateToken ,getLog);

export default router;