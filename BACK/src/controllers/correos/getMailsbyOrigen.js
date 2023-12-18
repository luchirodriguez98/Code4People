import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getMailsbyOrigen(req, res) {

    const { id: idUsuarioConectado } = req.user;
    
    const mail = await sendQuery(query.getMailsbyOrigen, [idUsuarioConectado])

    if (!mail) {
        return res.status(404).send({
            ok: false,
            data: null,
            error: `No hay enviados de  id ${idUsuarioConectado}`
        })
} 


    res.send({
        ok: true,
        data: mail,
    error: null
})
}

export { getMailsbyOrigen };