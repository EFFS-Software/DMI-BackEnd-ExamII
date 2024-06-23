import express from "express";
import bodyParser from "body-parser";
import { Categoria } from "./apis/ApiCategoria.js";
import { Producto } from "./apis/apiProducto.js";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

// Rutas
app.use("/api/categoria", Categoria); // Categoria
app.use("/api/producto", Producto); // Categoria

app.listen(3000, () => {
  console.log("Servidor inciado");
});
