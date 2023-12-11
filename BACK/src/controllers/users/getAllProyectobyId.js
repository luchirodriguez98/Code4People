import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getAllProyectoARealizarbyId (req, res) {

    const {proyectoId} = req.params;

    const [proyecto] = await sendQuery(query.getAllProyectoARealizarbyId, [proyectoId])

    if (!proyecto) {
        return res.status(404).send({
            ok: false,
            data: null,
            error: `No se ha encontrado el proyecto a realizar con el id ${proyectoId}`
        })
}


    res.send({
        ok: true,
        data: proyecto,
    error: null
})
}

export { getAllProyectoARealizarbyId};