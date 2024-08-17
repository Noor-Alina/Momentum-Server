import express from 'express';
import * as auth from '../controllers/authController.js';


const router = express.Router();

// Registration route
router.post('/SignUp', auth.signUp);

// Login route
router.post('/Login', auth.logIn);

export default router;