const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

const productsRoutes = require("./src/routers/product");
const userRoutes = require("./src/routers/user");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log("tienda-BE on port", port);
});
app.use("/productos", productsRoutes);
app.use("/usuarios", userRoutes);
