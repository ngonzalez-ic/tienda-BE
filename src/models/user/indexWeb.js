const mongoose = require("../../../.bin/mongodb");
const bcrypt = require("bcrypt");
const validators = require("../../utils/validators");
const errorMessage = require("../../utils/errorMessage");
const Schema = mongoose.Schema;
const usersSchema = Schema({
  user: {
    type: String,
    required: [true, errorMessage.GENERAL.campo_obligatorio],
    trim: true,
  },

  email: {
    type: String,
    required: [true, errorMessage.GENERAL.campo_obligatorio],
    trim: true,
  },

  password: {
    type: String,
    required: [true, errorMessage.GENERAL.campo_obligatorio],
    validate: {
      validator: async function (v) {
        return validators.isGoodPassword(v);
      },
      message: errorMessage.USERSADMIN.passwordIncorrect,
    },
  },
});
usersSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
usersSchema.statics.validateUser = async function (email, password) {
  const userWeb = await this.findOne({ email: email });

  if (userWeb) {
    if (bcrypt.compareSync(password, userWeb.password)) {
      // User y password ok, generar token

      return { error: false, message: "usuario ok", userWeb: userWeb };
    } else {
      return { error: true, message: "password incorrecto" };
    }
  } else {
    return { error: true, message: "usuario incorrecto" };
  }
};
module.exports = mongoose.model("UsuariosWeb", usersSchema);
