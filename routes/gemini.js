import express from 'express';
import { generateContent } from '../controllers/geminiController.js'; // Import the controller function

const router = express.Router();


router.post('/generate-content', generateContent); 

export default router;