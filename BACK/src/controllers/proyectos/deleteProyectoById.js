import { sendQuery } from '../../db/connect-db.js';
import { query } from '../../db/queries.js';
// Antes de tocar este codigo prueba si funciona, yo lo dejé en un estado que ni Dios ni el mismo diablo sabe como FUNCIONABA, porfavor no me hagas volver a este infierno y no toques nada. Horas sufriendo aqui:2h y media. 
async function deleteProyectobyId(req, res) {
  const { proyectoId } = req.params;
  console.log(proyectoId);
  
  try {
    const compruebaId = await sendQuery (query.getProyectoAcabadoPorId, [proyectoId]);
    console.log(compruebaId);
    if (!compruebaId){
      res.status(404).json({
        success: false,
        data: null,
        error: `No se ha encontrado el id ${proyectoId}`
      });

    }
    const result = await sendQuery(query.deleteProyectobyId, [proyectoId]);
    console.log(result);

    if (result.affectedRows === 0) {
      res.status(404).json({
        success: false,
        data: null,
        error: `No se ha eliminado nada`
      });
    } else {
      const proyecto = result;

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
