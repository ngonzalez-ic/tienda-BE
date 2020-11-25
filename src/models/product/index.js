const mongoose = require("../../../.bin/mongodb");
const Schema = mongoose.Schema;

const imgSchema = new mongoose.Schema({
  fieldname: "String",
  originalname: "String",
  encoding: "String",
  mimetype: "String",
  destination: "String",
  filename: "String",
  path: "String",
  size: "String",
});
const productsSchema = Schema({
  name: String,
  sku: String,
  image: imgSchema,
  description: String,
  stock: Number,
  // destacados
  highligth: String,
  price: Number,
});
productsSchema.virtual("image_path").get(function () {
  if (this.image && this.image.filename) {
    return "http://localhost:3001/images" + this.image.filname;
  } else {
    return null;
  }
});
productsSchema.set("toJSON", { getters: true, virtuals: true });
// productsSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model(" Productos ", productsSchema);
