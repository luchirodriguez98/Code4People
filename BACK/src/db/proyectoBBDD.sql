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
	estado BOOLEAN DEFAULT true,
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
    estado BOOLEAN default null,
    FOREIGN KEY (autor) REFERENCES usuarios(id_usuario),
    PRIMARY KEY (id_proyecto)
);





--  SELECT * FROM proyectos_a_realizar;
-- Valor de prueba
-- INSERT INTO proyectos_a_realizar(titulo,descripcion,autor) VALUES ('calculadora','Necesito una calculadora simple, que no sea cientifica',3);

-- Peticiones proyectos

CREATE TABLE IF NOT EXISTS peticiones(
id_peticion int auto_increment,
id_proyecto INT,
autor INT,
titulo VARCHAR (500),
descripcion TEXT,
estado BOOLEAN DEFAULT null,
PRIMARY KEY (id_peticion),
FOREIGN KEY (autor) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_proyecto) REFERENCES proyectos_a_realizar(id_proyecto)
);





-- Valor de prueba 
--  INSERT INTO peticiones(id_proyecto,autor,titulo,descripcion) VALUES (1,3,'Sobre tu calculadora','Hola, Soy un programador FullStack interesado en hacer tu proyecto'); 
-- INSERT INTO peticiones(id_proyecto,autor,titulo,descripcion) VALUES(2,3,'que','hsjkhjks');
 -- Tabla Mail
 create table if not exists mails(
	id_mail int auto_increment,
    mensaje VARCHAR(500),
    destinatario INT,
    origen INT,
    PRIMARY KEY (id_mail),
    FOREIGN KEY (destinatario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (origen) REFERENCES usuarios(id_usuario)
    );
    
    -- Tabla mensajes chat en linea
    
     create table if not exists mensajes(
	id_mensaje int auto_increment,
    mensaje VARCHAR(2000),
    id_usuario_envia INT,
    id_usuario_recibe INT,
    PRIMARY KEY (id_mensaje),
    FOREIGN KEY (id_usuario_envia) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_usuario_recibe) REFERENCES usuarios(id_usuario)
    );
    


-----------------------------
-- Añadimos usuarios y roles
-----------------------------
 -- Ver todos los usuarios

-- SELECT * FROM usuarios;



-- SELECT * FROM proyectos_acabados;
-- DELETE FROM proyectos_acabados WHERE id_proyecto = 3;

-- PRUEBAS DE DELIMITERS!!!! 
DELIMITER //

CREATE TRIGGER after_update_peticion
AFTER UPDATE ON peticiones
FOR EACH ROW
BEGIN
    -- Verificar si el estado de la petición ha cambiado
    IF NEW.estado != OLD.estado THEN
        -- Insertar un nuevo correo en la tabla de correos
        INSERT INTO mails (mensaje, destinatario, origen)
        VALUES (
            CONCAT('El estado de tu petición "', NEW.titulo, '" ha cambiado a "', NEW.estado, '".'),
            NEW.autor,
            14 -- El admin
        );
    END IF;
END //

DELIMITER ;




    
