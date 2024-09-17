import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import { GEMINI_API_KEY } from "../utils/constants.js";

dotenv.config();

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export const generateContent = async (req, res) => {
    const { dietType, days, mealPreference } = req.body; 

    const prompt = `Generate a JSON format like structured ${dietType} meal plan for ${days} days. Preferences: ${mealPreference}. Do not generate any time associated with these meals. 
    Make sure to give me the day and the list of meals. In the meals list, name the meal type as meal, the actual meal as name and the list of ingrediants as ingrediants. Additionally, always provide the day tag, also provide the value like day: day1 and etc. Only provide breakfast, lunch, dinner. No snacks`;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response; 
        const text = response.text(); 
        res.status(200).json({ content: text }); 
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'Failed to generate content' }); 
    }
};
