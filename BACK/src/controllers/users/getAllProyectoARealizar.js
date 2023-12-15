import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { User } from '../../schemas/User.js';



async function getAllProyectoARealizar (req, res) {
    
    const { role: roleUsuario } = req.user;
    if (roleUsuario === 'empresa' ){
        return res.status(403).send({
            ok: false,
            data: null,
            error: `No tienes permisos`
        })
    }
    const results = await sendQuery(query.getAllProyectoARealizar);
    
    res.send({
    ok: true,
    data: results,
    error: null
    })
}

export { getAllProyectoARealizar };