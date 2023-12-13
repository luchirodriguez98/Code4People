import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { zodErrorMap } from '../../helpers/zodErrorMap.js';
import { HttpError } from '../../models/HttpError.js';
import { LoginUser } from '../../schemas/User.js';

async function logIn (req, res, next) {
  // validamos el usuario que se loguea
    const { success, error, data } = LoginUser.safeParse(req.body);

    if (!success) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
        ok: false,
        data: null,
        message: null,
        error: errors
    });
    }

    const { email, pass: realPassword } = data;
    try {
        // Primero nos aseguramos de que el usuario exista en la BBDD
        const [user] = await sendQuery(query.checkEmail, [email]);
        console.log(user);
        if (!user) {
        return next(new HttpError(400, 'Email y/o contraseña incorrectos.'));
    }

    // Comparamos las contraseñas
    const isValidPassword = await bcrypt.compare(realPassword, user.pass);

    if (!isValidPassword) {
        return next(new HttpError(400, 'Email y/o contraseña incorrectos.'));
    }

    //* Tenemos luz verde, el usuario se ha logeado correctamente, así que creamos un nuevo token con la info que queremos que el usuario se guarde
    const infoToUser = { id: user.user_id, role: user.role, nombre: user.nombre };

    const token = jwt.sign(infoToUser, process.env.JWT_SECRET, { expiresIn: '1 day' });

    infoToUser.exp = Date.now() + (1000 * 60 * 60 * 24);

    res.send({
        ok: true,
        message: 'Logeado correctamente',
        error: null,
        data: { token, user: infoToUser }
    });
    } catch (error) {
    return next(error);
    }
}

export { logIn };