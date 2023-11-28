import express from 'express';

import {
    getAllUsers, 
    getUserById, 
    addUser
} from '../controllers/users/index.js';


const userRouter = express.Router();


userRouter.get('/', getAllUsers);
userRouter.get('/:userId',getUserById);
userRouter.post('/', addUser);


export { userRouter }   