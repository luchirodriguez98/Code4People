
const query = {
  //==================USUARIOS============================


  //Obtener todos los usuarios
  getAllUsers: 'SELECT * FROM usuarios WHERE estado = 1',
  //Obtener usuario por id
  getUserById: 'SELECT * FROM usuarios WHERE id_usuario = ?',
  // Añadir usuario admin
  addUserAdmin: 'INSERT INTO usuarios (nombre,email,pass,role) VALUES (?,?,?,\'usuario\')',
  //Añadir usuario Empresa
  addUserEmpresa: 'INSERT INTO usuarios (nombre,email,pass,role) VALUES (?,?,?,\'usuario\')',
  //Añadir usuario colaborador
  addUser: 'INSERT INTO usuarios (nombre,email,pass,role, confirmation_code) VALUES (?,?,?,?,?)',
  //Ver todas las empresas
  getAllEmpresas: 'SELECT * FROM usuarios WHERE role = "empresa"',
  //Ver todos los colaboradores
  getAllNormalUsers: 'SELECT * FROM usuarios WHERE role = "usuario"',
  //Eliminar usuario
  deleteUserById: 'UPDATE usuarios SET estado = false WHERE id_usuario = ?',
  //Recoje el estado del usuario 
  obtenerEstadoById:'SELECT estado FROM usuarios WHERE email = ?',

  //=================PROYECTOS=============================


  //Añadir proyecto nuevo
  addProyectoNuevo:'INSERT INTO proyectos_a_realizar(titulo,descripcion,autor) VALUES (?,?,?);',
  //Añaduir proyecto acabado
  addProyectoAcabado: 'INSERT INTO proyectos_acabados(titulo,url,autor) VALUES (?,?,?);',
  //Ver todas las peticiones de todos los usuarios
  getAllProyectoARealizar: 'SELECT p.*, u.nombre as autor FROM proyectos_a_realizar p JOIN usuarios u ON p.autor = u.id_usuario WHERE p.estado IS null',
  //Proyecto por id 
  getAllProyectoARealizarbyId:'SELECT p.titulo, p.descripcion, u.nombre as autor FROM proyectos_a_realizar p JOIN usuarios u ON p.autor = u.id_usuario WHERE id_proyecto = ?; ',
  //Ver todas las peticiones segun el usuario conectado
  getAllProyectosAcabados:'SELECT id_proyecto, titulo, url, url_imagen FROM proyectos_acabados',
  //Ver proyecto acabado por id
  getProyectoAcabadoPorId: 'SELECT id_proyecto from proyectos_acabados where id_proyecto = ?',
  //Eliminar proyecto acabado de usuario
  deleteProyectobyId: 'DELETE FROM proyectos_acabados WHERE id_proyecto =  ?',
  //Acabar proyecto
  acabarProyecto: 'UPDATE proyectos_a_realizar SET estado = true WHERE id_proyecto = ?',
  //Este de aqui es por si quieres ponerlo otra vez en no acabado, esta por si acaso
  noAcabadoProyecto: 'UPDATE proyectos_a_realizar SET estado = null WHERE id_proyecto = ?',
  //Obtener proyectos y peticiones segun id usuario
  obtenerProyectoPeticiones:'SELECT proyectos_a_realizar.id_proyecto, proyectos_a_realizar.titulo AS proyecto_titulo, proyectos_a_realizar.descripcion AS proyecto_descripcion, proyectos_a_realizar.estado AS proyecto_estado, peticiones.id_peticion, peticiones.autor, peticiones.titulo AS peticion_titulo, peticiones.descripcion AS peticion_descripcion, peticiones.estado AS peticion_estado FROM proyectos_a_realizar JOIN usuarios ON proyectos_a_realizar.autor = usuarios.id_usuario LEFT JOIN peticiones ON proyectos_a_realizar.id_proyecto = peticiones.id_proyecto WHERE usuarios.id_usuario = ?',
  
  //==================PETICIONES===========================


  //Obtener peticiones
   addPeticion: 'INSERT INTO peticiones(id_proyecto,autor,titulo,descripcion) VALUES (?,?,?,?) ',
   //Obtener peticiones hechas a tu proyecto del usuario conectado 
   getPeticiones: 'SELECT p.*, pr.titulo as titulo_proyecto FROM proyectos_a_realizar pr LEFT JOIN peticiones p ON pr.id_proyecto = p.id_proyecto WHERE pr.autor = ? AND p.estado IS NULL',
  //Obtener peticiones hechas por el usuario
   getPeticionesUser: 'SELECT p.*, pa.autor as autor_proyecto, pa.titulo as titulo_proyecto FROM peticiones p JOIN proyectos_a_realizar pa ON p.id_proyecto = pa.id_proyecto WHERE p.autor = ?',
   //Aceptar peticion
    aceptarPeticion: 'UPDATE peticiones SET estado = true WHERE id_peticion = ?',
   //Denegar peticion
    denegarPeticion: 'UPDATE peticiones SET estado = false WHERE id_peticion = ?',


  //=====================CORREOS==========================


  getMailsbyDestino: 'SELECT * FROM mails where destinatario = ?',
  getMailsbyOrigen: 'SELECT * FROM mails where origen = ?',
  addMail: 'INSERT INTO mails(mensaje,destinatario,origen) VALUES(?,?,?)',



   //================ OTROS =============================


   //Comprobación de email para login
   checkEmail: 'SELECT * FROM usuarios WHERE email = ?'
}


export { query };