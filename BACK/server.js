import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import cors from 'cors';


import { connection } from './src/db/connect-db.js';
import { userRouter } from './src/routes/userRoutes.js';
import { error404 } from './src/controllers/error404.js';
import errorHandler from './src/controllers/errorHandler.js';
import { projectRouter } from './src/routes/projectRoutes.js';
import { mailsRouter } from './src/routes/mailsRoutes.js';



const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

app.use('/users', userRouter);
app.use('/', projectRouter);
app.use('/mails',mailsRouter);


app.use('*', error404);
app.use(errorHandler);

connection.connect()
  .then(() => {
    console.log('Conectado a la base de datos...');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}...`));
  })
  .catch(err => console.log(err.message));