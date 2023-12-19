import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getPeticiones (req, res) {
    //const { id: idUsuarioConectado } = req.user;
    const { id: idUsuarioConectado } = req.user;
    const results = await sendQuery(query.getPeticiones,idUsuarioConectado);
    
    if (!results || results.length === 0) {
        return res.send({
            ok: false,
            data: null,
            error: `No se han encontrado peticiones`
        })
}

    res.send({
    ok: true,
    data: results,
    error: null
    }) 
}

export { getPeticiones };