import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getMailbyId (req, res) {

    const {destino} = req.params;

    const [mail] = await sendQuery(query.getMailbyId, [destino])

    if (!mail) {
        return res.status(404).send({
            ok: false,
            data: null,
            error: `No se ha encontrado el usuario con el id ${destino}`
        })
}


    res.send({
        ok: true,
        data: user,
    error: null
})
}

export { getMailbyId };