import express from 'express';
import * as auth from '../controllers/authController.js';


const router = express.Router();

router.post('/SignUp', auth.signUp);


router.post('/LogIn', auth.logIn);

export default router;