import express from 'express';
const router = express.Router();
import { authorize, callback, getData } from '../controllers/fitbitController.js'; 


// Route to initiate OAuth flow
router.get('/auth', authorize);

// Route to handle OAuth callback
router.get('/callback', callback);

// Route to fetch Fitbit data
router.get('/data', getData);


export default router;

