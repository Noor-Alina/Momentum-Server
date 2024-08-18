import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";


const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

//base for auth routes
app.use('/auth', authRoutes);

//base for profile route
app.use('/user', profileRoutes);

app.listen(PORT, () => {
console.log(`Listening on PORT ${PORT}.`);
});