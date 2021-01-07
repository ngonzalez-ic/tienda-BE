const mongoose = require("../../../.bin/mongodb");
const user = require("../user");
const { schema } = require("../user");
const Schema = mongoose.Schema;

const salesSchema = Schema({
  date: Date,
  userId: String,
  product_id: String,
  whithOutTac: Number,
  price: Number,
  priceOff: Number,
  unit: Number,
  payment: {
    status: String,
    method: String,
    dataExpiration: Date,
  },
});

module.exports = mongoose.model("sale,", salesSchema);
