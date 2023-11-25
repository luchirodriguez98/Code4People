import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getUserById (req, res) {

    const {userId} = req.params;

    const [user] = await sendQuery(query.getUserById, [userId])

    if (!user) {
        return res.status(404).send({
            ok: false,
            data: null,
            error: `No se ha encontrado el usuario con el id ${userId}`
        })
}


    res.send({
        ok: true,
        data: user,
    error: null
})
}

export { getUserById };