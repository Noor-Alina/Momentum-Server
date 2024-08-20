import "dotenv/config";
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../utils/constants.js";


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader){
        return res.status(403).json({error: "Please Log In"});
    }else {
        const token = authHeader.split(" ")[1];

        
        try {
            const decodedToken = jwt.verify(token, SECRET_KEY);
            req.userId = decodedToken.id;
            next();

        } catch (error) {
            res.status(401).send("Invalid auth token");
        }
    }
};

export default authMiddleware;