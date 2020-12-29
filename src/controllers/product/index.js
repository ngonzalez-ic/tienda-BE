const productModel = require("../../models/product/index");
const multer = require("multer");
var DIR = "./public/images/";

var upload = multer({ dest: DIR }).single("photo");
module.exports = {
  getAllProducts: async (req, res) => {
    const product = await productModel.find({});
    console.log(product);
    res.status(201).send({ product });
  },
  getById: async (req, res) => {
    console.log(req.params.id);
    const product = await productModel.findById(req.params.id);
    res.json(product);
  },

  createProducts: async (req, res, next) => {
    console.log("aca", req.body);
    try {
      const product = new productModel(
        ({ name, sku, images, description, highlith, price } = req.body)
      );
      const productSave = await product.save();
      res.status(201).send({ productSave });
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: e.message });
      res.status(400).send({ message: e.message });
      res.status(404).send({ message: e.message });
    }
  },
  updateProducts: async (res, req) => {
    const product = await productModel.update(
      { _id: req.params.id },
      req.body,
      { multi: fase }
    );
  },
  deleteProducts: async (req, res) => {
    console.log(req.params.id);
    const product = await productModel.deleteOne({ _id: req.params.id });
  },

  upload: async function (req, res, next) {
    try {
      upload(req, res, function (err) {
        if (err) {
          console.log(err);
          next();
        }
        console.log(req.file);
        res.status(201).json({
          status: "success",
          message: "Imagen cargada",
          data: req.file,
        });
      });
    } catch (e) {
      next(e);
    }
  },
};
