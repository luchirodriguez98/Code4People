
const query = {
  getAllUsers: 'SELECT * FROM usuarios',
  getUserById: 'SELECT * FROM usuarios WHERE id_usuario = ?',
 // addUser: 'INSERT INTO usuarios (nombre, email, pass) VALUES (?, ?, ?)',
 // Añadir usuario admin
  addUserAdmin: 'INSERT INTO usuarios (nombre,email,pass,role) VALUES (?,?,?,\'usuario\')',
//Añadir usuario Empresa
  addUserEmpresa: 'INSERT INTO usuarios (nombre,email,pass,role) VALUES (?,?,?,\'usuario\')',
//Añadir usuario colaborador
  addUser: 'INSERT INTO usuarios (nombre,email,pass,role, confirmation_code) VALUES (?,?,?,?,?)',
  //Ver todas las peticiones de todos los usuarios
  getAllProyectoARealizar: 'SELECT p.titulo, p.descripcion, u.nombre as autor FROM proyectos_a_realizar p JOIN usuarios u ON p.autor = u.id_usuario;',
  //Proyecto por id 
  getAllProyectoARealizarbyId:'SELECT p.titulo, p.descripcion, u.nombre as autor FROM proyectos_a_realizar p JOIN usuarios u ON p.autor = u.id_usuario WHERE id_proyecto = ?; ',
  //Ver todas las peticiones segun el usuario conectado
  getAllProyectosAcabados:'SELECT titulo, url FROM proyectos_acabados',
  //Ver todas las empresas
  getAllEmpresas: 'SELECT * FROM usuarios WHERE role = "empresa"',
  //Ver todos los colaboradores
  getAllNormalUsers: 'SELECT * FROM usuarios WHERE role = "usuario"',
  //Proyectos realizados TODOS
  getAllProyectos: '',
   //Obtener bandeja de enviados
   getSendMailbyId: 'SELECT * FROM mails WHERE origen = ? ',
   //Obtener bandeja de recibidos de usuario
   getMailById: 'SELECT * FROM mails WHERE destino = ?',
   //Comprobación de email para login
   checkEmail: 'SELECT * FROM usuarios WHERE email = ?'
}


export { query };