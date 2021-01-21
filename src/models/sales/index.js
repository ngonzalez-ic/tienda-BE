const mongoose = require("../../../.bin/mongodb");
const { schema } = require("../product");
const Schema = mongoose.Schema;

const paymentSchema = Schema({
  status: String,
  method: String,
});
const salesSchema = Schema({
  date: Date,
  userId: String,
  productId: String,
  whithOutTac: Number,
  price: Number,
  priceOff: Number,
  unit: Number,
  payment: paymentSchema,
});

module.exports = mongoose.model("Sale,", salesSchema);
