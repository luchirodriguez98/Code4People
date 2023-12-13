import express from 'express';
import jwt from 'jsonwebtoken';

import {
    getAllUsers,
    getUserById, 
    addUser,
    logIn
} from '../controllers/users/index.js';
import userAuth from '../middlewares/userAuth.js';


const userRouter = express.Router();

//POST
userRouter.post('/registro', addUser);
userRouter.post('/logIn', logIn);
//GET
userRouter.get('/usuarios', getAllUsers);
userRouter.get('/usuarios/:userId',getUserById);

// userRouter.get('/test', userAuth, isAdmin, (req, res) => {
    
    
//     const user = req.user
    
    
//     res.send({  message: 'Hola ' + user.nombre })
// })




export { userRouter }