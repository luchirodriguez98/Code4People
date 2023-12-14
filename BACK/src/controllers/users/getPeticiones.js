import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getPeticiones (req, res) {
    const results = await sendQuery(query.getPeticiones);
    
    res.send({
    ok: true,
    data: results,
    error: null
    }) 
}

export { getPeticiones };