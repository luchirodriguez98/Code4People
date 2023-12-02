-------------------------
-- CREACIÓN DE LA BBDD --
-------------------------

create database if not exists proyectosplai;

use proyectosplai;


------------------------
-- CREACIÓN DE TABLAS --
------------------------

-- Usuarios
CREATE TABLE IF NOT EXISTS roles(
rol_id int PRIMARY KEY auto_increment,
nombre_rol varchar(15) not null
);

create table if not exists usuarios(
	id_usuario int auto_increment,
    nombre varchar(255) not null,
    email varchar(255) unique not null,
    pass varchar(255) not null,
    tipo_usuario int not null,
    foreign key (tipo_usuario) REFERENCES roles(rol_id),
    PRIMARY KEY (id_usuario)
);

-- Proyecto


create table if not exists proyectos(
	id_proyecto int auto_increment,
    nombre varchar(255) not null,
    tipo_proyecto int not null,
    descripcion varchar(255) not null,
    estado_proyecto int,
    PRIMARY KEY (id_proyecto)
);
-- Petición Proyecto
create table if not exists peticiones(
	id_peticion int auto_increment,
    descripcion varchar(255) not null,
    autor int,
    FOREIGN KEY (autor) REFERENCES usuarios(id_usuario),
    PRIMARY KEY (id_peticion)
);

-- Proyecto asignado

create table if not exists proyectos_asignados(
    megusta__proyecto INT,
    megusta_usuario INT,
    FOREIGN KEY (megusta__proyecto) REFERENCES proyectos(id_proyecto),
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
SELECT u.id_usuario, u.nombre, u.email, u.pass, r.nombre_rol
FROM usuarios u
JOIN roles r ON u.tipo_usuario = r.rol_id;

-- INSERT INTO roles(nombre_rol) VALUES ("Administrador");
-- INSERT INTO roles(nombre_rol) VALUES ("Empresa");
-- INSERT INTO roles(nombre_rol) VALUES ("Colaborador");
-- INSERT INTO usuarios(nombre,email,pass,tipo_usuario) VALUES ('admin','adm@adm.com','1234','1');
-- INSERT INTO usuarios(nombre,email,pass,tipo_usuario) VALUES ('user','user@gmail.com','1234','3'); 

-- Añadimos peticiones de prueba
-- INSERT INTO peticiones(descripcion,autor) VALUES ('Necesito una app que simule una calculadora','2');
 -- Ver todas las peticiones
SELECT p.id_peticion, p.descripcion, u.nombre AS nombre_autor
FROM peticiones p
JOIN usuarios u ON p.autor = u.id_usuario;