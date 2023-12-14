	-------------------------
-- CREACIÓN DE LA BBDD --
-------------------------
drop database if exists proyectosplai;
create database if not exists proyectosplai;

use proyectosplai;


------------------------
-- CREACIÓN DE TABLAS --
------------------------

-- Usuarios


create table if not exists usuarios(
	id_usuario int auto_increment,
    nombre varchar(255) not null,
    email varchar(255) unique not null,
    pass varchar(255) not null,
    role ENUM('admin','empresa','usuario') DEFAULT 'usuario',
    confirmation_code varchar(50) DEFAULT NULL,
    PRIMARY KEY (id_usuario)
);
-- Proyecto
create table if not exists proyectos_acabados(
	id_proyecto int auto_increment,
    titulo varchar(255) not null,
    url VARCHAR(600)not null,
    autor INT,
    PRIMARY KEY (id_proyecto),
    FOREIGN KEY (autor) REFERENCES usuarios(id_usuario)
);	

	
-- INSERT INTO proyectos_acabados(titulo,url,autor) VALUES ('Proyecto Final','https://github.com/luchirodriguez98/Proyecto-Final',3);
--  INSERT INTO proyectos_acabados(titulo,url,autor) VALUES ('Bootcamp Info','https://github.com/Fundacio-Esplai-Enfocat/BOOTCAMP-S22-JAVASCRIPT',3);


-- Proyectos a realizar
create table if not exists proyectos_a_realizar(
	id_proyecto int auto_increment,
    titulo varchar(255) not null,
    descripcion varchar(600) not null,
    autor int,
    FOREIGN KEY (autor) REFERENCES usuarios(id_usuario),
    PRIMARY KEY (id_proyecto)
);
--  SELECT * FROM proyectos_a_realizar;
-- Valor de prueba
-- INSERT INTO proyectos_a_realizar(titulo,descripcion,autor) VALUES ('calculadora','Necesito una calculadora simple, que no sea cientifica',3);

-- Peticiones proyectos

CREATE TABLE IF NOT EXISTS peticiones(
id_peticion int auto_increment,
proyecto INT,
autor INT,
titulo VARCHAR (20),
descripcion VARCHAR (500),
estado ENUM('aceptado','denegado','nada') DEFAULT 'nada', 
PRIMARY KEY (id_peticion),
FOREIGN KEY (autor) REFERENCES usuarios(id_usuario),
FOREIGN KEY (proyecto) REFERENCES proyectos_a_realizar(id_proyecto)
);
-- Valor de prueba 
 INSERT INTO peticiones(proyecto,autor,titulo,descripcion) VALUES (1,2,'Sobre tu calculadora','Hola, Soy un programador FullStack interesado en hacer tu proyecto'); 

 -- Tabla Mail
 create table if not exists mails(
	id_mail int auto_increment,
    asunto VARCHAR (255),
    mensaje VARCHAR(500),
    destinatario INT,
    origen INT,
    PRIMARY KEY (id_mail),
    FOREIGN KEY (destinatario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (origen) REFERENCES usuarios(id_usuario)
    );
-----------------------------
-- Añadimos usuarios y roles
-----------------------------
 -- Ver todos los usuarios


-- SELECT * from usuarios;

SELECT * FROM usuarios WHERE role = "empresa";
-- INSERT INTO usuarios(nombre,email,pass,role) VALUES ('dani','dani@adm.com','1234','admin');
-- INSERT INTO usuarios(nombre,email,pass,role) VALUES ('luis','luis@gmail.com','1234','admin'); 
-- INSERT INTO usuarios(nombre,email,pass,role) VALUES ('lucia','lucia@gmail.com','1234','admin');
-- INSERT INTO usuarios(nombre,email,pass,role) VALUES ('esplai','esplai@gmail.com','1234','empresa');
-- INSERT INTO usuarios(nombre,email,pass,role) VALUES ('usuario','user@gmail.com','1234','usuario'); 

SELECT * from usuarios;
-- Añadimos peticiones de prueba
-- INSERT INTO proyectos_a_realizar(titulo, descripcion,autor) VALUES ('Calculadora','Necesito una web que sea una calculadora, que se vea simple, solo necesito que tenga sumar, restar, multiplicar y dividir','5');
 -- Ver todas las peticiones


