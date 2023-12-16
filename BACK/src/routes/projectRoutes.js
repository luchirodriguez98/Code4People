import express from 'express';

import { 
    userAuth,
    isAdmin,
    isEmpresa,
    isUsuario
} from '../middlewares/index.js';

import {
    getAllProyectoARealizar, 
    getAllProyectoARealizarbyId,
    getAllProyectosAcabados,
    getPeticionesUser,
    addProyectoNuevo,
    addProyectoAcabado,
    addPeticion,
    getPeticiones
} from '../controllers/index.js';

const projectRouter = express.Router();
//POST
projectRouter.post('/nuevoProyecto', userAuth, addProyectoNuevo);
projectRouter.post('/nuevoAcabado',userAuth,addProyectoAcabado);
projectRouter.post('/nuevaPeticion/:proyectoId',userAuth, addPeticion);
//GET
projectRouter.get('/proyectospendientes', userAuth,  getAllProyectoARealizar);
projectRouter.get('/proyectospendientes/:proyectoId', userAuth, getAllProyectoARealizarbyId);
projectRouter.get('/proyectos', getAllProyectosAcabados);
projectRouter.get('/peticiones', userAuth,  getPeticiones);
projectRouter.get('/peticiones/:authorId', userAuth,  getPeticionesUser);


export { projectRouter }