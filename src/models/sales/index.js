const mongoose = require("../../../.bin/mongodb");
const user = require("../user");
const { schema } = require("../user");
const Schema = mongoose.Schema;

const salesModel = Schema({
  date: Date,
  userId: String,
  product_id: String,
  withTax: Number,
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
