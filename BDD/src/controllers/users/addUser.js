import { sendQuery } from '../../db/connect-db.js';
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

    const {username, email, password } = data;

    try {
    await sendQuery(query.addUser, [username, email, password]);    
    } catch (error) {
    res.status(500).send({
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