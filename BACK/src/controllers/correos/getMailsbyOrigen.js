import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getMailsbyOrigen(req, res) {

    const { id: idUsuarioConectado } = req.user;
    
    const mail = await sendQuery(query.getMailsbyOrigen, [idUsuarioConectado])

    if (!mail) {
        return res.send({
            ok: false,
            data: null,
            error: `No hay correos enviados `
        })
} 


    res.send({
        ok: true,
        data: mail,
    error: null
})
}

export { getMailsbyOrigen };