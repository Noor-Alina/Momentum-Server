import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected route to get user profile
router.get('/profile', authMiddleware, getProfile);

router.put('/profile', authMiddleware, updateProfile);

export default router;