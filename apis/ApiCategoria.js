import Express from "express";
import { getCategoria } from "../controllers/CategoriaController.js";

const Categoria = Express();
Categoria.get("", getCategoria);
export { Categoria };
