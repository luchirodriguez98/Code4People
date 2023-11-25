-------------------------
-- CREACIÓN DE LA BBDD --
-------------------------

create database if not exists proyectosplai;

use proyectosplai;


------------------------
-- CREACIÓN DE TABLAS --
------------------------

-- Usuarios

create table if not exists usuario(
	id_usuario int auto_increment,
    nombre varchar(255) not null,
    email varchar(255) unique not null,
    pass varchar(255) not null,
    tipo_usuario int not null,
    PRIMARY KEY (id_usuario)
);

-- Proyecto

create table if not exists proyecto(
	id_proyecto int auto_increment,
    nombre varchar(255) not null,
    tipo_proyecto int not null,
    descripcion varchar(255) not null,
    estado_proyecto int,
    PRIMARY KEY (id_proyecto)
);
-- Petición Proyecto
create table if not exists peticion(
	id_peticion int auto_increment,
    descripcion varchar(255) not null,
    autor int,
    FOREIGN KEY (autor) REFERENCES usuario(id_usuario),
    PRIMARY KEY (id_peticion)
);

-- Proyecto asignado

create table if not exists proyecto_asignado(
    megusta__proyecto INT,
    megusta_usuario INT,
    FOREIGN KEY (megusta__proyecto) REFERENCES proyecto(id_proyecto),
    FOREIGN KEY (megusta_usuario) REFERENCES usuario(id_usuario),
    PRIMARY KEY (megusta__proyecto, megusta_usuario)
);

-- Añadimos usuarios
SELECT * from usuario;
-- INSERT INTO usuario(nombre,email,pass,tipo_usuario) VALUES ('admin','adm@adm.com','1234','0');
-- INSERT INTO usuario(nombre,email,pass,tipo_usuario) VALUES ('user','user@gmail.com','1234','1'); 
-- Añadimos peticiones de prueba
-- INSERT INTO peticion(descripcion,autor) VALUES ('Necesito una app que simule una calculadora','1');
SELECT * from peticion;