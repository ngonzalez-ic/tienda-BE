const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const path = require("path");

const productsRoutes = require("./src/routers/product");
const userRoutes = require("./src/routers/user");
const userRoutesWeb = require("./src/routers/user/indexWeb");
const salesRouters = require("./src/routers/sales/sales");
app.use(express.static(path.join(__dirname, "public")));
app.set("secretKey", process.env.SECRET_KEY);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log("tienda-BE on port", port);
});
app.use("/productos", productsRoutes);
app.use("/usuarios", userRoutes);
app.use("/usuariosweb", userRoutesWeb);
app.use("/sales", salesRouters);
