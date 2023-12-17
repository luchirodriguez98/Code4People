
import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { zodErrorMap } from '../../helpers/zodErrorMap.js';
import { Mail } from '../../schemas/Mail.js';


async function addMail (req, res, next) {

    const { success, error, data } = Mail.safeParse(req.body);  

    if (!success) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
        ok: false,
        data: null,
        error: errors
        })
    }
    const {userId} = req.params;
    const {mensaje} = data;
    const { id: idUsuarioConectado } = req.user;
  // Añadir a la BBDD el usuario nuevo
    try {
        await sendQuery(query.addMail, [mensaje,userId,idUsuarioConectado]);
    } catch (error) {
        return next(new Error(error.message));
    }


    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Mail enviado correctamente.'
    })

}

export { addMail };