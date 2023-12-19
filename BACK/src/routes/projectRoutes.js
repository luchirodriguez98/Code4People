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
    getPeticiones,
    deleteProyectobyId,
    aceptarPeticion,
    denegarPeticion,
    obtenerProyectoPeticiones
    
} from '../controllers/index.js';
import { addFotoProyectoAcabado } from '../controllers/proyectos/addFotoProyectoAcabado.js';

const projectRouter = express.Router();
//POST
projectRouter.post('/nuevoProyecto', userAuth, addProyectoNuevo);
projectRouter.post('/nuevoAcabado',userAuth, addProyectoAcabado);
projectRouter.post('/nuevaPeticion/:proyectoId',userAuth, addPeticion);

// PUT
projectRouter.put('/nuevoAcabado/addFoto/:proyectoId', userAuth, addFotoProyectoAcabado);

//GET
projectRouter.get('/proyectospendientes', userAuth,  getAllProyectoARealizar);
projectRouter.get('/proyectospendientes/:proyectoId', userAuth, getAllProyectoARealizarbyId);
projectRouter.get('/proyectos', getAllProyectosAcabados);
projectRouter.get('/peticiones', userAuth,  getPeticiones);
projectRouter.get('/peticiones/:authorId', userAuth,  getPeticionesUser);
projectRouter.get('/proyectopeticiones',userAuth, obtenerProyectoPeticiones);
//DELETE 
projectRouter.delete('/delete/:proyectoId',userAuth, deleteProyectobyId);
//UPDATE, se le llama update pero se utiliza patch
projectRouter.patch('/peticiones/aceptar/:peticionId',userAuth, aceptarPeticion); //Aceptar petición
projectRouter.patch('/peticiones/denegar/:peticionId', userAuth, denegarPeticion); //Denegar petición



export { projectRouter, addFotoProyectoAcabado, userAuth };