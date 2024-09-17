import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();
import {FITBIT_CLIENT_ID, FITBIT_CLIENT_SECRET, FITBIT_REDIRECT_URI} from "../utils/constants.js";


const authorize = (req, res) => {

    const fitbitAuthUrl = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${FITBIT_CLIENT_ID}&redirect_uri=${FITBIT_REDIRECT_URI}&scope=profile%20activity%20nutrition`;
    
    res.redirect(fitbitAuthUrl);
};

const callback = async (req, res) => {

    const {code} = req.query; 
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
        res.redirect(`http://localhost:5173/Tracking?access_token=${access_token}`);
    } catch (error) {
        console.error('Error getting access token:', error.response ? error.response.data : error.message);
        res.status(500).send('Authentication failed');
    }
};

const getData = async (req, res) => {

    const accessToken = req.query.access_token;

    if (!accessToken){
        console.error('Access token is required');
        return res.status(400).send('Access token is required');
    } else{

        try {
            const [profileResponse, activityResponse, nutritionResponse] 
            = await Promise.all([

                axios.get('https://api.fitbit.com/1/user/-/profile.json', {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }),

                axios.get('https://api.fitbit.com/1/user/-/activities/date/2024-04-17.json', {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }),

                axios.get('https://api.fitbit.com/1/user/-/foods/log/date/2024-04-17.json', {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }),

            ]);

            res.json({
                profile: profileResponse.data,
                activity: activityResponse.data,
                nutrition: nutritionResponse.data,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Failed to fetch data');
        }
    }
};

export {authorize, callback, getData};