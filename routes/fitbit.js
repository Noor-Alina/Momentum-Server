import express from 'express';
const router = express.Router();
import { authorize, callback, getData } from '../controllers/fitbitController.js'; 


router.get('/auth', authorize);

router.get('/callback', callback);

router.get('/data', getData);


export default router;

