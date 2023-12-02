
const query = {
    getAllUsers: 'SELECT * FROM usuarios',
    getUserById: 'SELECT * FROM usuarios WHERE id_usuario = ?',
   // addUser: 'INSERT INTO usuarios (nombre, email, pass) VALUES (?, ?, ?)',
   // Añadir usuario admin
    addUserAdmin: 'INSERT INTO usuarios (nombre,email,pass,tipo_usuario) VALUES (?,?,?,1)',
  //Añadir usuario Empresa
    addUserEmpresa: 'INSERT INTO usuarios (nombre,email,pass,tipo_usuario) VALUES (?,?,?,2)',
  //Añadir usuario colaborador
    addUserColaborador: 'INSERT INTO usuarios (nombre,email,pass,tipo_usuario) VALUES (?,?,?,3)',
    //Ver todas las peticiones de todos los usuarios
    getAllPeticiones: 'SELECT p.id_peticion, p.descripcion, u.nombre AS nombre_autor FROM peticiones p JOIN usuarios u ON p.autor = u.id_usuario',
    //Ver todos los usuarios admin
    getAllAdmins: 'SELECT u.id_usuario, u.nombre, u.email, r.nombre_rol as nombre_tipo_usuario FROM usuarios u JOIN roles r ON u.tipo_usuario = r.rol_id WHERE u.tipo_usuario = 1',
    //Ver todas las empresas
    getAllEmpresas: 'SELECT u.id_usuario, u.nombre, u.email, r.nombre_rol as nombre_tipo_usuario FROM usuarios u JOIN roles r ON u.tipo_usuario = r.rol_id WHERE u.tipo_usuario = 2',
  //Ver todos los colaboradores
    getAllColaboradores: 'SELECT u.id_usuario, u.nombre, u.email, r.nombre_rol as nombre_tipo_usuario FROM usuarios u JOIN roles r ON u.tipo_usuario = r.rol_id WHERE u.tipo_usuario = 3'
  }

export { query };