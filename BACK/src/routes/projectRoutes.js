import express from 'express';

import {
    getAllProyectoARealizar, 
    getAllProyectoARealizarbyId,
    getAllProyectosAcabados
} from '../controllers/users/index.js';


const projectRouter = express.Router();
//POST

//GET

projectRouter.get('/proyectospendientes', getAllProyectoARealizar);
projectRouter.get('/proyectospendientes/:proyectoId',getAllProyectoARealizarbyId);
projectRouter.get('/proyectos',getAllProyectosAcabados);


export { projectRouter }