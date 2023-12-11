import express from 'express';

import {
    getAllUsers,
    getAllProyectoARealizar, 
    getUserById, 
    addUser,
    getAllProyectoARealizarbyId,
    getAllProyectosAcabados,
    logIn
} from '../controllers/users/index.js';


const userRouter = express.Router();
//POST
userRouter.post('/registro', addUser);
userRouter.post('/logIn', logIn);
//GET
userRouter.get('/usuarios', getAllUsers);
userRouter.get('/usuarios/:userId',getUserById);
userRouter.get('/proyectospendientes', getAllProyectoARealizar);
userRouter.get('/proyectospendientes/:proyectoId',getAllProyectoARealizarbyId);
userRouter.get('/proyectos',getAllProyectosAcabados);


export { userRouter }