import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function obtenerProyectoPeticiones (req, res) {

    const { id: idUsuarioConectado } = req.user;

    const proyecto = await sendQuery(query.obtenerProyectoPeticiones,idUsuarioConectado)

    if (!proyecto || proyecto.length === 0) {
        return res.status(404).send({
            ok: false,
            data: null,
            error: `No se ha encontrado ningún proyecto ni peticiones  ${idUsuarioConectado}`
        })
}
    

    res.send({
        ok: true,
        data: proyecto,
    error: null
})
}

export { obtenerProyectoPeticiones};