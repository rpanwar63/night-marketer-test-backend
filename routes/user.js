import express from 'express';
import { users, userDelete, updateUser, addUser } from '../controllers/user.js';

const router = express.Router();

router.get('/users/:page', users);
router.delete('/users/:id', userDelete);
router.post('/user/:id', updateUser);
router.post('/newuser', addUser);

export default router;