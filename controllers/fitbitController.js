import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();
import {FITBIT_CLIENT_ID, FITBIT_CLIENT_SECRET, FITBIT_REDIRECT_URI} from "../utils/constants.js";


const authorize = (req, res) => {

    const fitbitAuthUrl = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${FITBIT_CLIENT_ID}&redirect_uri=${FITBIT_REDIRECT_URI}&scope=profile%20activity%20nutrition`;
    
    console.log("Authorization URL:", fitbitAuthUrl); // Log the URL for debugging
    res.redirect(fitbitAuthUrl);
};

