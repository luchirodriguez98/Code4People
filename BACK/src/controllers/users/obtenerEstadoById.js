import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function obtenerEstadoById (req, res) {

    const {userId} = req.params;

    const [user] = await sendQuery(query.obtenerEstadoById, [userId])

    if (!user) {
        return res.status(404).send({
            ok: false,
            data: null,
            error: `No se ha encontrado el usuario con el id ${userId}`
        })
}


    res.send({
        ok: true,
        data: user,
    error: null
})
}

export { obtenerEstadoById };