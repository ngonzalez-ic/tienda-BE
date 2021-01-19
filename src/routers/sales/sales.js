const express = require("express");
const router = express.Router();
// const Axios = require('axios')
const saleController = require("../../controllers/sales/index");

router.post("/sales", saleController.createSale);

module.exports = router;
