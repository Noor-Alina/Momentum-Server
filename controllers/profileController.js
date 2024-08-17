import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);


//get profile Info function 
const getProfile = async (req, res) => {
    
    const userId = req.userId;

    try {
        const user = await knex('users').where({id: userId}).first();
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }else{
            const { password, ...userProfile } = user;
            res.json(userProfile);
        }
    
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export {getProfile};