import { addUser } from './users/addUser.js';
import { getAllUsers } from './users/getAllUsers.js';
import { getUserById } from './users/getUserById.js';
import { logIn } from './users/logIn.js';
import { getAllProyectoARealizar } from './proyectos/getAllProyectoARealizar.js';
import { getAllProyectoARealizarbyId } from './proyectos/getAllProyectobyId.js';
import { getAllProyectosAcabados } from './proyectos/getAllProyectosAcabados.js'
import { getPeticiones } from './peticiones/getPeticiones.js';
import { getPeticionesUser } from './peticiones/getPeticionesUser.js';
import { addProyectoNuevo } from './proyectos/addProyectoNuevo.js';
import { addProyectoAcabado } from './proyectos/addProyectoAcabado.js';
import { addPeticion } from './peticiones/addPeticion.js';
import { getMailsbyDestino } from './correos/getMailbyDestino.js';
import { getMailsbyOrigen } from './correos/getMailsbyOrigen.js';
import { addMail } from './correos/addMail.js';
import { deleteUserById } from './users/deleteUserById.js';
import { obtenerEstadoById } from './users/obtenerEstadoById.js';
import { deleteProyectobyId } from './proyectos/deleteProyectoById.js';
import { aceptarPeticion } from './proyectos/aceptarPeticion.js';
import { denegarPeticion } from './proyectos/denegarPeticion.js';
import { neutrarPeticion } from './proyectos/neutrarPeticion.js';



export { addUser, getAllUsers, getUserById, logIn , getAllProyectoARealizar, getAllProyectoARealizarbyId, getAllProyectosAcabados, getPeticiones,getPeticionesUser,addProyectoNuevo, addProyectoAcabado,addPeticion, getMailsbyDestino, getMailsbyOrigen, addMail, deleteUserById,  obtenerEstadoById, deleteProyectobyId, aceptarPeticion, denegarPeticion, neutrarPeticion };