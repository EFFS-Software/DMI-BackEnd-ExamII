import { db } from "../database/cnx.js";

const getCategoria = async (req, res) => {
  const sql = `select id, descripcion from categoria order by descripcion`;
  const result = await db.query(sql);
  res.json(result);
};

export { getCategoria };
