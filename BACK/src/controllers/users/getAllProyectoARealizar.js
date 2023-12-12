import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getAllProyectoARealizar (req, res) {
    const results = await sendQuery(query.getAllProyectoARealizar);
    
    res.send({
    ok: true,
    data: results,
    error: null
    })
}

export { getAllProyectoARealizar };