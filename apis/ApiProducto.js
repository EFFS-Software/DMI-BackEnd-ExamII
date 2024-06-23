import Express from "express";
import {
  getProducto,
  getProductoByID,
  postProducto,
  deleteProductoByID,
} from "../controllers/ProductoController.js";

const Producto = Express();

Producto.get("", getProducto);
Producto.get("/:id", getProductoByID);
Producto.post("/", postProducto);
Producto.delete("/:id", deleteProductoByID);

export { Producto };
