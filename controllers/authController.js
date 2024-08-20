import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../utils/constants.js";


const signUp = async (req, res) => {
    const {user_name, user_email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const [user] = await knex('users').insert({
            user_name,
            user_email,
            password: hashedPassword
        });

        res.status(201).json({message: "User created", userId: user.id});
    } catch (error) {
        res.status(400).json({error: "User already exists or invalid data"});
    }
};

const logIn = async (req, res) => {
    const {user_email, password} = req.body;

    if (!user_email || !password) {
        return res.status(404).send("Please enter the required fields");
      }

    const user = await knex('users').where({user_email}).first();

    if (!user){
        return res.status(404).json({error: "user not found"});

    }else{
        const checkPasswordIsValid = await bcrypt.compare(password, user.password);
        if (!checkPasswordIsValid){
            return res.status(401).json({error: "Invalid Password"});
        }else{
            const token = jwt.sign({id: user.id, email: user.user_email}, SECRET_KEY, { expiresIn: "24h" }
            );
            res.json({ token });
        }
    }
};



export {signUp, logIn};