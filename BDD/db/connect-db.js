import express from 'express';
import morgan from 'morgan';
// import mysql from 'mysql2';
import mysql from 'mysql2/promise';


const { MYSQL_PORT, MYSQL_USER, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

const connection = await mysql.createConnection({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
});


async function sendQuery (query, values) {
  const [results] = await connection.query(query, values);

  return results;
}

export { connection, sendQuery };



// FORMA ANTIGUA DE CONECTAR MADE BY DANI 
 // * CONECTAR A LA BASE DE DATOS
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '1234',
//     database: 'proyectosplai'

//   });
// //Prueba de conexión
//   connection.connect((err) => {
//     if (err) {
//       console.error('Error al conectar a la base de datos:', err);
//       return;
//     }
//     console.log('Conexión exitosa a la base de datos');
//   });



