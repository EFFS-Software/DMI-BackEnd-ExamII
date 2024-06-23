-- Active: 1706044690405@@localhost@5432@dmi_examii

insert into
    categoria (descripcion)
VALUES ('Carnes'),
    ('Mariscos'),
    ('Vegetales'),
    ('Frutas'),
    ('Snacks');

select id, descripcion from categoria order by descripcion;

select a.id, b.descripcion "categoria", a.descripcion, a.estado, a.precio
from producto a
    inner join categoria b on a.id_categoria = b.id
order by b.descripcion, a.descripcion;