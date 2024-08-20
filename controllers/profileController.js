import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);


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


const updateProfile = async (req, res) => {
    const userId = req.userId; 
    const { user_name, user_email, password } = req.body;

    try {
        if (!user_name || !user_email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        const updateData = { user_name, user_email };
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }

        const updatedUser = await knex('users').where({ id: userId }).update(updateData);
        if (updatedUser) {
           return  res.status(200).json({ message: 'Profile updated successfully' });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
        
    } catch (error) {
            console.error('Error updating profile:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }

};

export {getProfile, updateProfile};