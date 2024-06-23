import dotenv from "dotenv";
import pg from "pg-promise";

dotenv.config();

const user = process.env._USER;
const pass = process.env._PASS;
const dataBase = process.env._DBNAME;
const server = process.env._HOST;
const portDb = process.env._PORT;

const pgp = pg();

const Pass = encodeURIComponent(pass);
const cnstr = `postgresql://${user}:${Pass}@${server}:${portDb}/${dataBase}`;

const db = pgp(cnstr);

db.connect()
  .then(() => {
    console.log("Conexion Exitosa");
  })
  .catch((err) => {
    console.log(`Error de conexion: ${err}`);
  });

export { db };
