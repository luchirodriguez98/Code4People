
import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { zodErrorMap } from '../../helpers/zodErrorMap.js';
import { ProyectoAcabado } from '../../schemas/ProyectoAcabado.js';


async function addProyectoAcabado (req, res, next) {

    const { success, error, data } = ProyectoAcabado.safeParse(req.body);  

    if (!success) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
        ok: false,
        data: null,
        error: errors
        })
    }

    const {titulo, url} = data;
    const { id: idUsuarioConectado } = req.user;
  // Añadir a la BBDD el usuario nuevo
    try {
        await sendQuery(query.addProyectoAcabado, [titulo, url, idUsuarioConectado]);
    } catch (error) {
        return next(new Error(error.message));
    }


    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Proyecto acabado añadido correctamente.'
    })

}

export { addProyectoAcabado };