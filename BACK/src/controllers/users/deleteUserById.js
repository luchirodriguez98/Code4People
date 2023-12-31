import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
import { HttpError } from '../../models/HttpError.js';

async function deleteUserById (req, res, next) {
  const { userId } = req.params;

  try {
    const result = await sendQuery(query.deleteUserById, [userId]);

    if (result.affectedRows === 0) {
      return next(new HttpError(400, `El usuario con el id ${userId} no existe.`));
    }

    res.send({
      ok: true,
      data: null,
      message: 'Usuario borrado correctamente.'
    });
  } catch (error) {
    next(error);
  }
}

export { deleteUserById };
