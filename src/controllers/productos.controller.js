import Producto from "../models/Producto.js";

export const obtenerProductos = async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
};

export const crearProducto = async (req, res) => {
  const nuevo = new Producto(req.body);
  await nuevo.save();
  res.json(nuevo);
};
export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const actualizado = await Producto.findByIdAndUpdate(id, req.body, { new: true });
  res.json(actualizado);
};
export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  await Producto.findByIdAndDelete(id);
  res.json({ mensaje: "Producto eliminado" });
};  