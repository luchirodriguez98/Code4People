import express from 'express';
import jwt from 'jsonwebtoken';

import {
    getAllUsers,
    getUserById, 
    addUser,
    deleteUserById,
    logIn
} from '../controllers/index.js'
import {userAuth} from '../middlewares/userAuth.js';
import {isAdmin} from '../middlewares/isAdmin.js';





const userRouter = express.Router();

//POST
userRouter.post('/registro', addUser);
userRouter.post('/logIn', logIn );
//GET
userRouter.get('/usuarios', userAuth, isAdmin, getAllUsers);
userRouter.get('/usuarios/:userId',userAuth,getUserById);
//DELETE (Eliminamos el usuario pero sigue existiendo en la base de datos, simplemente cambiamos su booleano para representar que no exista y no se pueda logear)
userRouter.patch('/delete/:userId',userAuth, isAdmin, deleteUserById);
//(Eliminamos el usuario pero sigue existiendo en la base de datos, simplemente cambiamos su booleano para representar que no exista y no se pueda logear)

// userRouter.get('/test', userAuth, isAdmin, (req, res) => {
    
    
//     const user = req.user
    
    
//     res.send({  message: 'Hola ' + user.nombre })
// })




export { userRouter }