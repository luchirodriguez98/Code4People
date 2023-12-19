import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getPeticionesUser (req, res) {

    const {authorId} = req.params;
    const { id: idUsuarioConectado } = req.user;

    if (authorId != idUsuarioConectado){
        return res.status(403).send({
            ok: false,
            data: null,
            error: `No tienes permisos`
        })
    }


    const peticion = await sendQuery(query.getPeticionesUser, [authorId])

    if (!peticion) {
        return res.send({
            ok: false,
            data: null,
            error: `No se han encontrado peticiones hechas por el user`
        })
}


    res.send({
        ok: true,
        data: peticion,
    error: null
})
}

export { getPeticionesUser};