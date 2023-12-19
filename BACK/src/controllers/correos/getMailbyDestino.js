import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function getMailsbyDestino(req, res) {

    const { id: idUsuarioConectado } = req.user;
    
    const mail = await sendQuery(query.getMailsbyDestino, [idUsuarioConectado])

    if (!mail) {
        return res.status(404).send({
            ok: false,
            data: null,
            error: `No se han encontrado mails del usuario con id ${idUsuarioConectado}`
        })
} 


    res.send({
        ok: true,
        data: mail,
    error: null
})
}

export { getMailsbyDestino };