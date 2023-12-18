import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';

async function deleteProyectobyId(req, res) {
  const { proyectoId } = req.params;
  console.log(proyectoId);

  try {
    const result = await sendQuery(query.deleteProyectobyId, [proyectoId]);

    if (!Array.isArray(result) || result.length === 0) {
      res.status(404).json({
        success: false,
        data: null,
        error: `No hay ningún proyecto con el id ${proyectoId}, o bien por alguna razón ha funcionado y se ha eliminado, guay, si ha funcionado y no te tira la web NO TOCAR`
      });
    } else {
      const [proyecto] = result;

      res.json({
        success: true,
        data: proyecto,
        error: null
      });
    }
  } catch (error) {
    console.error('Error al eliminar el proyecto:', error);
    res.status(500).json({
      success: false,
      data: null,
      error: 'Error interno del servidor al eliminar el proyecto'
    });
  }
}

export { deleteProyectobyId };
