import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function deleteProyectobyId (req, res) {

    const {proyectoId} = req.params;

    const [proyecto] = await sendQuery(query.deleteProyectobyId, [proyectoId])

    if (!proyecto) {
        return res.status(404).send({
            ok: false,
            data: null,
            error: `No hay ningún proyecto con el id${proyectoId}`
        })
}


    res.send({
        ok: true,
        data: proyecto,
    error: null
})
}

export { deleteProyectobyId};