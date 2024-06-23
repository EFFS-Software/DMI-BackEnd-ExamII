import { db } from "../database/cnx.js";

const getProducto = async (req, res) => {
  const sql = `select a.id, b.descripcion "categoria", a.nombre, a.descripcion, a.estado, a.precio from producto a inner join categoria b on a.id_categoria = b.id order by b.descripcion, a.nombre`;
  const result = await db.query(sql);
  res.json(result);
};

const getProductoByID = async (req, res) => {
  const params = req.params.id;
  const sql = `select a.id, b.descripcion "categoria", a.nombre, a.descripcion, a.estado, a.precio from producto a inner join categoria b on a.id_categoria = b.id where a.id=$1 order by b.descripcion, a.nombre`;
  const result = await db.query(sql, params);
  res.json(result);
};

const postProducto = async (req, res) => {
  const { nombre, descripcion, estado, precio, id_categoria } = req.body;
  const params = [nombre, descripcion, estado, precio, id_categoria];
  const sql = `insert into producto (nombre, descripcion, estado, precio, id_categoria) values ($1, $2, $3, $4, $5) returning * `;
  const result = await db.query(sql, params);
  res.json(result);
};

const deleteProductoByID = async (req, res) => {
  const params = req.params.id;
  const sql = `delete from producto where id=$1 returning * `;
  const result = await db.query(sql, params);
  res.json(result);
};

export { getProducto, getProductoByID, postProducto, deleteProductoByID };
