import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function obtenerProyectoPeticiones (req, res) {

    const { id: idUsuarioConectado } = req.user;

    const proyecto = await sendQuery(query.obtenerProyectoPeticiones,idUsuarioConectado)


}
    

    res.send({
        ok: true,
        data: proyecto,
    error: null
})


export { obtenerProyectoPeticiones};