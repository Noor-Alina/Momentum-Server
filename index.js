import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import workoutRoutes from "./routes/workouts.js";
import geminiRoutes from "./routes/gemini.js";


const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.resolve('public/images')));

//base for auth routes
app.use('/auth', authRoutes);

//base for profile route
app.use('/user', profileRoutes);

//base for workouts route
app.use('/workouts', workoutRoutes);

// Use the Gemini routes
app.use('/gemini', geminiRoutes);

app.listen(PORT, () => {
console.log(`Listening on PORT ${PORT}.`);
});