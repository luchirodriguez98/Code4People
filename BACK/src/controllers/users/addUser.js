import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { zodErrorMap } from '../../helpers/zodErrorMap.js';
import { User } from '../../schemas/User.js';

async function addUser (req, res) {

    const { success, error, data } = User.safeParse(req.body);  

    if (!success) {
        const errors = zodErrorMap(error);
        return res.send({
        ok: false,
        data: null,
        error: errors
        })
    }

    const {nombre, email, pass } = data;
    

    try {
        await sendQuery(query.addUser, [nombre, email, pass]);    
    } catch (error) {
        return res.status(500).send({
            ok: false,
            data: null,
            error: error.message
        })
    }

    res.send({
        ok: true,
        error: null,
        data: null,
        message: 'Usuario añadido correctamente.'
    })

}

export { addUser };