import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getPeticiones (req, res) {
    //const { id: idUsuarioConectado } = req.user;
    const { id: idUsuarioConectado } = req.user;
    const results = await sendQuery(query.getPeticiones,idUsuarioConectado);
    
    res.send({
    ok: true,
    data: results,
    error: null
    }) 
}

export { getPeticiones };