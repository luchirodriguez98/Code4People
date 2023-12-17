import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { HttpError } from '../../models/HttpError.js';

async function denegarPeticion (req, res, next) {
  const { peticionId } = req.params;

  try {
    const result = await sendQuery(query.denegarPeticion, [peticionId]);

    if (result.affectedRows === 0) {
      return next(new HttpError(400, `La peticion con el id ${peticionId} no existe.`));
    }

    res.send({
      ok: true,
      data: null,
      message: 'Peticion actualizada.'
    });
  } catch (error) {
    next(error);
  }
}

export { denegarPeticion };
