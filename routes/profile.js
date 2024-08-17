import express from 'express';
import { getProfile } from '../controllers/profileController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected route to get user profile
router.get('/profile', authMiddleware, getProfile);

export default router;