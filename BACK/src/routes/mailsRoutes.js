import express from 'express';

import {
    getMailsbyDestino,
    getMailsbyOrigen,
    addMail
    
} from '../controllers/users/index.js';
import userAuth from '../middlewares/userAuth.js';

const mailsRouter = express.Router();

//POST
mailsRouter.post('/correoNuevo/:userId',userAuth,addMail);
//GET
mailsRouter.get('/recibidos', userAuth, getMailsbyDestino);
mailsRouter.get('/enviados',userAuth,getMailsbyOrigen);


export { mailsRouter }