import { Router } from "express";
import { obtenerProductos, crearProducto } from "../controllers/productos.controller.js";

const router = Router();

router.get("/productos", obtenerProductos);
router.post("/productos", crearProducto);

export default router;
import { actualizarProducto } from "../controllers/productos.controller.js";

router.put("/productos/:id", actualizarProducto);
import { eliminarProducto } from "../controllers/productos.controller.js";

router.delete("/productos/:id", eliminarProducto);