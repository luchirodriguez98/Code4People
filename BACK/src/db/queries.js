
const query = {
  //==================USUARIOS============================

  //Obtener todos los usuarios
  getAllUsers: 'SELECT * FROM usuarios',
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

  //=================PROYECTOS=============================
  //Añadir proyecto nuevo
  addProyectoNuevo:'INSERT INTO proyectos_a_realizar(titulo,descripcion,autor) VALUES (?,?,?);',
  //Ver todas las peticiones de todos los usuarios
  getAllProyectoARealizar: 'SELECT p.titulo, p.descripcion, u.nombre as autor FROM proyectos_a_realizar p JOIN usuarios u ON p.autor = u.id_usuario;',
  //Proyecto por id 
  getAllProyectoARealizarbyId:'SELECT p.titulo, p.descripcion, u.nombre as autor FROM proyectos_a_realizar p JOIN usuarios u ON p.autor = u.id_usuario WHERE id_proyecto = ?; ',
  //Ver todas las peticiones segun el usuario conectado
  getAllProyectosAcabados:'SELECT titulo, url FROM proyectos_acabados',

  //==================PETICIONES===========================


  //Obtener peticiones
   getPeticiones: 'SELECT usuarios.nombre AS nombre_usuario,peticiones.autor, peticiones.id_peticion, peticiones.titulo, peticiones.descripcion FROM peticiones JOIN usuarios ON peticiones.autor = usuarios.id_usuario',
  //Obtener peticiones hechas por el usuario
   getPeticionesUser: 'SELECT id_peticion,titulo,estado FROM peticiones where autor = ?',

   //================ OTROS =============================


   //Comprobación de email para login
   checkEmail: 'SELECT * FROM usuarios WHERE email = ?'
}


export { query };