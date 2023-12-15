import express from 'express';

import {
    getAllProyectoARealizar, 
    getAllProyectoARealizarbyId,
    getAllProyectosAcabados,
    getPeticionesUser,
    addProyectoNuevo,
    addProyectoAcabado,
    getPeticiones
} from '../controllers/users/index.js';
import userAuth from '../middlewares/userAuth.js';

const projectRouter = express.Router();
//POST
projectRouter.post('/nuevoProyecto', userAuth,addProyectoNuevo);
projectRouter.post('/nuevoAcabado',userAuth,addProyectoAcabado);
//GET
projectRouter.get('/proyectospendientes', userAuth,getAllProyectoARealizar);
projectRouter.get('/proyectospendientes/:proyectoId', userAuth,getAllProyectoARealizarbyId);
projectRouter.get('/proyectos', getAllProyectosAcabados);
projectRouter.get('/peticiones', userAuth,getPeticiones);
projectRouter.get('/peticiones/:authorId', userAuth,getPeticionesUser);


export { projectRouter }