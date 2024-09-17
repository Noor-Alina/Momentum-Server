import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();
import {FITBIT_CLIENT_ID, FITBIT_CLIENT_SECRET, FITBIT_REDIRECT_URI} from "../utils/constants.js";


const authorize = (req, res) => {

    const fitbitAuthUrl = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${FITBIT_CLIENT_ID}&redirect_uri=${FITBIT_REDIRECT_URI}&scope=profile%20activity%20nutrition`;
    
    console.log("Authorization URL:", fitbitAuthUrl); // Log the URL for debugging
    res.redirect(fitbitAuthUrl);
};

const callback = async (req, res) => {
    console.log("Callback query parameters:", req.query);

    const {code} = req.query; 
    console.log("code:", code);

    console.log("Redirect URI:", FITBIT_REDIRECT_URI);

    try {
        const tokenResponse = await axios.post('https://api.fitbit.com/oauth2/token', null, {
            params: {
                client_id: FITBIT_CLIENT_ID,
                grant_type: 'authorization_code',
                redirect_uri: FITBIT_REDIRECT_URI,
                code: code,

            },

            headers: {
                Authorization: `Basic ${Buffer.from(`${FITBIT_CLIENT_ID}:${FITBIT_CLIENT_SECRET}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            
        });

        const {access_token} = tokenResponse.data;
        console.log("Token Response:", tokenResponse.data);
        console.log("Access Token:", access_token); 
        res.redirect(`http://localhost:5173/Tracking?access_token=${access_token}`);
    } catch (error) {
        console.error('Error getting access token:', error.response ? error.response.data : error.message);
        res.status(500).send('Authentication failed');
    }
};

export {authorize, callback};