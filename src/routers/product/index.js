const express = require("express");
const router = express.Router();
//const Axios = require('axios')
const productController = require("../../controllers/product/index");

router.get("/productos", productController.getAllProducts);
router.get("productos/:id", productController.getById);
router.post("/productos", productController.createProducts);
//router.put("/:id", productController.updateProducts);
//router.delete('/:id', productController.deleteProducts)

module.exports = router;
