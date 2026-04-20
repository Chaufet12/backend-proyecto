import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
});

export default mongoose.model("Producto", productoSchema);