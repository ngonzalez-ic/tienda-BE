const mongoose = require("mongoose");
mongoosePaginate = require("mongoose-paginate-v2");

mongoose.connect(
  "mongodb://localhost/utn",
  { useNewUrlParser: true },
  function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conectado a MongoDB");
    }
  }
);

module.exports = mongoose;
