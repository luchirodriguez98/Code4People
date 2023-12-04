import express from 'express';

import {
    getAllUsers, 
    getUserById, 
    addUser,
    logIn
} from '../controllers/users/index.js';


const userRouter = express.Router();

userRouter.post('/registro', addUser);
userRouter.post('/logIn', logIn);
userRouter.get('/:userId',getUserById);

export { userRouter }