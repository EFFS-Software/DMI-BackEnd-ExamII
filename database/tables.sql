-- Active: 1706044690405@@localhost@5432@dmi_examii
CREATE DATABASE dmi_examii;

CREATE TABLE categoria (
    id SERIAL PRIMARY KEY,
    descripcion VARCHAR(100)
);

SELECT * from producto;

CREATE TABLE producto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(100),
    estado INTEGER,
    precio DECIMAL(10, 2),
    id_categoria int,
    CONSTRAINT id_categoria FOREIGN KEY (id_categoria) REFERENCES categoria (id)
);