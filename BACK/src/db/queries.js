
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
  getAllProyectoARealizar: 'SELECT p.id_proyecto, p.titulo, p.descripcion, u.nombre as autor FROM proyectos_a_realizar p JOIN usuarios u ON p.autor = u.id_usuario;',
  //Proyecto por id 
  getAllProyectoARealizarbyId:'SELECT p.titulo, p.descripcion, u.nombre as autor FROM proyectos_a_realizar p JOIN usuarios u ON p.autor = u.id_usuario WHERE id_proyecto = ?; ',
  //Ver todas las peticiones segun el usuario conectado
  getAllProyectosAcabados:'SELECT titulo, url FROM proyectos_acabados',
  //Eliminar proyecto acabado de usuario
  deleteProyectobyId: 'DELETE FROM proyectos_acabados WHERE id_proyecto =  ?',
  aceptarPeticion: 'UPDATE peticiones SET estado = "aceptado" WHERE id_peticion = ?',
  denegarPeticion: 'UPDATE peticiones SET estado = "denegado" WHERE id_peticion = ?',
  neutrarPeticion: 'UPDATE peticiones SET estado = "nada" WHERE id_peticion = ?',
  //==================PETICIONES===========================


  //Obtener peticiones
   addPeticion: 'INSERT INTO peticiones(id_proyecto,autor,titulo,descripcion) VALUES (?,?,?,?) ',
   //Obtener peticiones hechas a tu proyecto del usuario conectado 
   getPeticiones: 'SELECT p.*, pr.titulo as titulo_proyecto FROM proyectos_a_realizar pr LEFT JOIN peticiones p ON pr.id_proyecto = p.id_proyecto WHERE pr.autor = ?',
  //Obtener peticiones hechas por el usuario
   getPeticionesUser: 'SELECT id_peticion,titulo,estado FROM peticiones where autor = ?',

  //=====================CORREOS==========================


  getMailsbyDestino: 'SELECT * FROM mails where destinatario = ?',
  getMailsbyOrigen: 'SELECT * FROM mails where origen = ?',
  addMail: 'INSERT INTO mails(mensaje,destinatario,origen) VALUES(?,?,?)',



   //================ OTROS =============================


   //Comprobación de email para login
   checkEmail: 'SELECT * FROM usuarios WHERE email = ?'
}


export { query };