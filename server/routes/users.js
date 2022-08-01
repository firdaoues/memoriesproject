import express from "express";
import { signup, signin } from "../controllers/user.js";
import User from '../models/user.js';

const router = express.Router();


router.post('/signin', signin);
router.post('/signup', signup);

// router.get("/users", getUsers, async (req,res)=>{
//     try {
//         console.log("h")
//         const users = await User.find();  
       
        
//         res.status(200).json(users);
        
//       } catch (error) {
    
//         res.status(404).json({ message: error.message });
//       }
// });


export default router;
