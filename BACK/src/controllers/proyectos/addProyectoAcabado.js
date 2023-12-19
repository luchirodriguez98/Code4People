
import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { uploadImage } from '../../helpers/cloudinary.js';
import { zodErrorMap } from '../../helpers/zodErrorMap.js';
import { ProyectoAcabado } from '../../schemas/ProyectoAcabado.js';


async function addProyectoAcabado (req, res, next) {

    const { success, error, data } = ProyectoAcabado.safeParse(req.body);  
    const photo = req.files?.imagen
    const { proyectoId } = req.params

    if (!success) {
        const errors = zodErrorMap(error);
        return res.status(400).send({
        ok: false,
        data: null,
        error: errors
        })
    }

    
    if (!photo) {
        return next(new HttpError(400, 'No has enviado ninguna foto de avatar.'))
    }


    const cloudinnaryResponse = await uploadImage(photo.tempFilePath)      
 
    if (cloudinnaryResponse.error) {
        return res.status(500).send({ error: cloudinnaryResponse.error } )
    }

    const { secure_url } = cloudinnaryResponse

    const {url} = data;
  // Añadir a la BBDD el usuario nuevo
    try {
        await sendQuery(query.addProyectoAcabado, [url, secure_url, proyectoId]);
        res.send({
            ok: true,
            error: null,
            data: null,
            message: 'Proyecto acabado añadido correctamente.'
        });
    } catch (error) {
        return next(new Error(error.message));
    }



}

export { addProyectoAcabado };