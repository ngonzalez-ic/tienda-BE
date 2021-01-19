const mongoose = require("../../../.bin/mongodb");
const Schema = mongoose.Schema;

const salesSchema = Schema({
  date: Date,
  userId: String,
  productId: String,
  whithOutTac: Number,
  price: Number,
  priceOff: Number,
  unit: Number,
  payment: {
    status: String,
    method: String,
  },
});

module.exports = mongoose.model("Sale,", salesSchema);
