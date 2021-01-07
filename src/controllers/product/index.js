const productModel = require('../../models/product/index')
const multer = require('multer')
const { search } = require('../../routers/product')
const DIR = './public/images/'
const upload = multer({ dest: './public/images/' }).single('photo')
module.exports = {
  getAllProducts: async (req, res) => {
    const queryName = { name: 'kongo' }
    const product = await productModel.find({
      name: { $regex: '.*' + req.query.search + '.*', $options: 'i' }
    })
    console.log(product)
    res.status(201).send({ product })
  },
  getById: async (req, res) => {
    console.log(req.params.id)
    const product = await productModel.findById(req.params.id)
    res.json(product)
  },

  createProducts: async (req, res, next) => {
    try {
      const product = new productModel({
        name: req.body.name,
        sku: req.body.sku,
        description: req.body.description,
        price: req.body.price,
        highlith: req.body.highlith,
        images: req.body.images /*,
        tags:req.body.tags */
      })
      const document = await product.save()
      res.status(201).json(document)
    } catch (e) {
      console.log(e)
      res.status(500).send({ message: e.message })
      res.status(400).send({ message: e.message })
      res.status(404).send({ message: e.message })
    }
  },
  updateProducts: async (res, req) => {
    const product = await productModel.update(
      { _id: req.params.id },
      req.body,
      { multi: fase }
    )
  },
  deleteProducts: async (req, res) => {
    console.log(req.params.id)
    const product = await productModel.deleteOne({ _id: req.params.id })
  },

  upload: async function (req, res, next) {
    try {
      upload(req, res, function (err) {
        if (err) {
          console.log(err)
          next()
        }
        console.log(req.file)
        res.status(201).json({
          status: 'success',
          message: 'Imagen cargada',
          data: req.file
        })
      })
    } catch (e) {
      next(e)
    }
  }
}
