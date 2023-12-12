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
    role ENUM("admin","empresa","usuario") DEFAULT "usuario",
    confirmation_code varchar(50) DEFAULT NULL,
    PRIMARY KEY (id_usuario)
);
-- Proyecto
create table if not exists proyectos_acabados(
	id_proyecto int auto_increment,
    titulo varchar(255) not null,
    url VARCHAR(600)not null,
    PRIMARY KEY (id_proyecto)
);	
SELECT titulo,url FROM proyectos_acabados;
-- INSERT INTO proyectos_acabados(titulo,url) VALUES ('Proyecto Final','https://github.com/luchirodriguez98/Proyecto-Final');
-- INSERT INTO proyectos_acabados(titulo,url) VALUES ('Bootcamp Info','https://github.com/Fundacio-Esplai-Enfocat/BOOTCAMP-S22-JAVASCRIPT');
-- Petición Proyecto
create table if not exists proyectos_a_realizar(
	id_proyecto int auto_increment,
    titulo varchar(255) not null,
    descripcion varchar(600) not null,
    autor int,
    FOREIGN KEY (autor) REFERENCES usuarios(id_usuario),
    PRIMARY KEY (id_proyecto)
);

-- Proyecto asignado

create table if not exists proyectos_asignados(
    megusta__proyecto INT,
    megusta_usuario INT,
    FOREIGN KEY (megusta__proyecto) REFERENCES proyectos_a_realizar(id_proyecto),
    FOREIGN KEY (megusta_usuario) REFERENCES usuarios(id_usuario),
    PRIMARY KEY (megusta__proyecto, megusta_usuario)
);
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


