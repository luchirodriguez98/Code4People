import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getAllUsers (req, res) {
    const results = await sendQuery(query.getAllUsers);
    
    res.send({
    ok: true,
    data: results,
    error: null
    })
}

export { getAllUsers };