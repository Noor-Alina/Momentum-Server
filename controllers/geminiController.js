import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import axios from 'axios';
import { GEMINI_API_KEY } from "../utils/constants.js";

dotenv.config();

// Initialize the GoogleGenerativeAI instance
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export const generateContent = async (req, res) => {
    const { dietType, days, mealPreference } = req.body; 

    const prompt = `Generate a JSON format like structured ${dietType} meal plan for ${days} days. Preferences: ${mealPreference}.`;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response; 
        const text = response.text(); 
        res.status(200).json({ content: text }); 
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'Failed to generate content' }); // Handle errors
    }
};
