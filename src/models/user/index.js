const mongoose = require("../../../.bin/mongodb");
const Schema = mongoose.Schema;
const usersSchema = Schema({
  role: String,
  user: String,
  password: String,
});
module.exports = mongoose.model("Usuarios", usersSchema);
