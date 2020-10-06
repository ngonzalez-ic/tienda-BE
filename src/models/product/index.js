const mongoose = require("../../../.bin/mongodb");
const Schema = mongoose.Schema
const productsSchema =Schema({
  name: String,
  sku: String,
  image: String,
  description: String,
  stock: Number,
  // destacado
  highligth: String,
  price: Number,
});
module.exports = mongoose.model("Productos", productsSchema);
