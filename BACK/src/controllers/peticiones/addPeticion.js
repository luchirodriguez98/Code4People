
import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { zodErrorMap } from '../../helpers/zodErrorMap.js';
import { Peticion } from '../../schemas/Peticion.js';


async function addPeticion (req, res, next) {

    const { success, error, data } = Peticion.safeParse(req.body);  

    if (!success) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
        ok: false,
        data: null,
        error: errors
        })
    }

    const {titulo, descripcion} = data;
    const { id: idUsuarioConectado } = req.user;
    const {proyectoId} = req.params;
  // Añadir a la BBDD el usuario nuevo
    try {
        await sendQuery(query.addPeticion, [proyectoId, idUsuarioConectado,titulo, descripcion]);
    } catch (error) {
        return next(new Error(error.message));
    }


    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Peticion añadido correctamente.'
    })

}

export { addPeticion };