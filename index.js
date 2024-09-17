import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import workoutRoutes from "./routes/workouts.js";
import geminiRoutes from "./routes/gemini.js";
import fitbitRoutes from "./routes/fitbit.js";


const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.resolve('public/images')));

app.use('/auth', authRoutes);

app.use('/user', profileRoutes);

app.use('/workouts', workoutRoutes);

app.use('/gemini', geminiRoutes);

// Use the Fitbit routes
app.use('/fitbit', fitbitRoutes);

app.listen(PORT, () => {
console.log(`Listening on PORT ${PORT}.`);
});