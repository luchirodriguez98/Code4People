import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { connection, sendQuery } from './db/connect-db.js';

const app = express();

app.use(morgan('dev'));

const routes = {
  home: '/',
  getUsers: '/users',
  addUser: '/users'
}

const q = {
  getAllUsers: 'SELECT * FROM usuario',
  getUserById: 'SELECT * FROM usuario WHERE id_usuario = ?',
}


app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
})


//* con callback
// app.get(routes.getUsers, (req, res) => {
//   connection.query(q.getAllUsers, (err, result) => {
//     console.log(err);
//     console.log(result);
//     console.log(fields);
//   });

//   res.send('Get users')
// })

//* con promesas
//! Hay que importar de 'mysql2/promise'
app.get(routes.getUsers, async (req, res) => {

  // [ [resultados] ,  [fields(no me interesan)]   ]
  const results = await sendQuery(q.getAllUsers)

 
  res.send({
    ok: true,
    data: results,
    error: null
  })
})

app.get('/users/:userId', async (req, res) => {

  const {userId} = req.params;

  const [user] = await sendQuery(q.getUserById, [userId])

  if (!user) {
    return res.status(404).send({
      ok: false,
      data: null,
      error: `No se ha encontrado el usuario con el id ${userId}`
    })
  }


  res.send({
    ok: true,
    data: user,
    error: null
  })

});



// versión callback
connection.connect((error) => {
  if(error) {
    console.log(error.message)
    return;
  }
  console.log('Contectado a la base de datos');
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}...`));
} );


// con promesas no utiliza callback
try {
  await connection.connect();
  console.log('Contectado a la base de datos');

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}...`));
} catch (error) {
  console.log(error.message);  
}
