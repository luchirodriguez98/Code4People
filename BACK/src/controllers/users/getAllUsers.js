import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getAllUsers (req, res) {
    const admin = req.user; //Token para ver el usuario conectado, si eres admin te lo debería decir
    //De todas formas, con el middleware de isAdmin esta función solo debería dejar hacersela a los admin
    
    const results = await sendQuery(query.getAllUsers);
    
    res.send({
    ok: true,
    data: results,
    error: null
    })
}

export { getAllUsers };