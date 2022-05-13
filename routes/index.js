import express from 'express';
import user from './user.js';

const router = express.Router();

router.use('/api/test1', user);

export default router;