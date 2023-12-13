import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getMailsbyDestino(req, res) {

    const {destino} = req.params;

    const [mail] = await sendQuery(query.getMailsbyDestino, [destino])

    if (!mail) {
        return res.status(404).send({
            ok: false,
            data: null,
            error: `No se han encontrado mails, o el usuario de destino ${destino}`
        })
} 


    res.send({
        ok: true,
        data: mail,
    error: null
})
}

export { getMailsbyDestino };