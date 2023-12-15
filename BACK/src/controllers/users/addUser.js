import bcrypt from 'bcrypt';
import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { zodErrorMap } from '../../helpers/zodErrorMap.js';
import { User } from '../../schemas/User.js';
import crypto from 'node:crypto';

async function addUser (req, res, next) {

    const { success, error, data } = User.safeParse(req.body);  

    if (!success) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
        ok: false,
        data: null,
        errors: errors
        })
    }

    const {nombre, email, pass, role } = data;

    const salt = 10;
    const hashedPassword = bcrypt.hashSync(pass, salt)
    const confirmationCode = crypto.randomUUID();

  // Añadir a la BBDD el usuario nuevo
    try {
        await sendQuery(query.addUser, [nombre, email, hashedPassword, role, confirmationCode]);
    } catch (error) {
        return next(new Error(error.message));
    }


    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Usuario añadido correctamente.'
    })

}

export { addUser };