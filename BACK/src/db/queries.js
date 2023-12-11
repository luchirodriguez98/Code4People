
const query = {
  getAllUsers: 'SELECT * FROM usuarios',
  getUserById: 'SELECT * FROM usuarios WHERE id_usuario = ?',
 // addUser: 'INSERT INTO usuarios (nombre, email, pass) VALUES (?, ?, ?)',
 // Añadir usuario admin
  addUserAdmin: 'INSERT INTO usuarios (nombre,email,pass,role) VALUES (?,?,?,"admin")',
//Añadir usuario Empresa
  addUserEmpresa: 'INSERT INTO usuarios (nombre,email,pass,role) VALUES (?,?,?,"empresa")',
//Añadir usuario colaborador
  addUser: 'INSERT INTO usuarios (nombre,email,pass,role, confirmation_code) VALUES (?,?,?,"usuario",?)',
  //Ver todas las peticiones de todos los usuarios
  getAllPeticiones: 'SELECT p.id_peticion, p.descripcion, u.nombre AS nombre_autor FROM peticiones p JOIN usuarios u ON p.autor = u.id_usuario',
  //Ver todas las empresas
  getAllEmpresas: 'SELECT * FROM usuarios WHERE role = "empresa"',
  //Ver todos los colaboradores
  getAllNormalUsers: 'SELECT * FROM usuarios WHERE role = "usuario"',
  //Proyectos realizados TODOS
  getAllProyectos: '',
   //Obtener bandeja de usuario
   getMailbyId: 'SELECT * FROM mails WHERE origen = ? ',
   //Obtener bandeja de enviados de usuario
   getSendMailById: 'SELECT * FROM mails WHERE destino = ?',
   //Comprobación de email
   checkEmail: 'SELECT * FROM users WHERE email = ?'
}


export { query };