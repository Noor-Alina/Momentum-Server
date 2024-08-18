import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);


const getAllWorkouts = async (req, res) => {

    try {
        const workouts = await knex('workouts');
        const filteredWorkouts = workouts.map(({created_at, updated_at, ...rest}) => rest);
        return res.status(200).json(filteredWorkouts);

    } catch (error) {
        return res.status(500).json({error: "An error occurred while fetching workouts."});
    }

};

const getWorkouts = async (req, res) => {

    const {type, difficulty} = req.query;

    let query; 

    if (type){
        query = knex('workouts').where('workout_type', type);
    }

    if (difficulty){
        query = query.where('difficulty', difficulty);
    }

    try {
        const workouts = await query;
        const filteredWorkouts = workouts.map(({created_at, updated_at, ...rest}) => rest);
        return res.status(200).json(filteredWorkouts);
    } catch (error) {
        return res.status(500).json({error: "An error occurred while fetching workouts."});
    }

};
export {getAllWorkouts, getWorkouts};