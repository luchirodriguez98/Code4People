import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getAllProyectosAcabados (req, res) {
    const results = await sendQuery(query.getAllProyectosAcabados);
    
    res.send({
    ok: true,
    data: results,
    error: null
    })
}

export { getAllProyectosAcabados };