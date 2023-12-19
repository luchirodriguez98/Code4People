
import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { uploadImage } from '../../helpers/cloudinary.js';
import { HttpError } from '../../models/HttpError.js';



async function addFotoProyectoAcabado (req, res, next ) {
    const photo = req.files?.imagen
    const { proyectoId } = req.params
    console.log('---> ',photo, proyectoId);

    if (!photo) {
        return next(new HttpError(400, 'No has enviado ninguna foto de avatar.'))
      }


    const cloudinnaryResponse = await uploadImage(photo.tempFilePath)      
 
    if (cloudinnaryResponse.error) {
        return res.status(500).send({ error: cloudinnaryResponse.error } )
    }

    const { secure_url } = cloudinnaryResponse

    try {
        await sendQuery(query.addFotoProyectoAcabado, [secure_url, proyectoId])
        res.send({ok: true, error: null })
    } catch (error) {
        return next(new Error(error.message))
    }
    
    
}

export { addFotoProyectoAcabado }

