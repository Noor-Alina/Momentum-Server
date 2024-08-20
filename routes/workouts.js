import express from 'express';
import {getAllWorkouts, getWorkouts} from "../controllers/workoutsController.js";
const router = express.Router();


router.get('/all', getAllWorkouts);


router.get('/', getWorkouts);

export default router;