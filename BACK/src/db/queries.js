
const query = {
    getAllUsers: 'SELECT * FROM usuario',
    getUserById: 'SELECT * FROM usuario WHERE id_usuario = ?',
    addUser: 'INSERT INTO usuario (nombre, email, pass) VALUES (?, ?, ?)'
  }

export { query };