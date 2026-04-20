import express from "express";
import cors from "cors";
import productosRoutes from "./routes/productos.routes.js";
import { conectarDB } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

conectarDB();

app.use("/api", productosRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});