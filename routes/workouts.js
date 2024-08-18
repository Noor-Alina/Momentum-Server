import express from 'express';
import {getAllWorkouts, getWorkouts} from "../controllers/workoutsController.js";
const router = express.Router();


router.get('/all', getAllWorkouts);

//get workouts
router.get('/', getWorkouts);

export default router;