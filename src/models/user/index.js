const mongoose = require("../../../.bin/mongodb");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const usersSchema = Schema({
  role: String,
  user: String,
  password: String,
});
usersSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
module.exports = mongoose.model("Usuarios", usersSchema);
