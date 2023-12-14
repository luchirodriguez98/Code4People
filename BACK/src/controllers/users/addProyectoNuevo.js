
import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { zodErrorMap } from '../../helpers/zodErrorMap.js';
import { Proyecto } from '../../schemas/Proyecto.js';


async function addProyectoNuevo (req, res, next) {

    const { success, error, data } = Proyecto.safeParse(req.body);  

    if (!success) {
        const errors = zodErrorMap(error);
        return res.send({
        ok: false,
        data: null,
        error: errors
        })
    }

    const {titulo, descripcion} = data;
    const { id: idUsuarioConectado } = req.user;
  // Añadir a la BBDD el usuario nuevo
    try {
        await sendQuery(query.addProyectoNuevo, [titulo, descripcion, idUsuarioConectado]);
    } catch (error) {
        return next(new Error(error.message));
    }


    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Proyecto añadido correctamente.'
    })

}

export { addProyectoNuevo };