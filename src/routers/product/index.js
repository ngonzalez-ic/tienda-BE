const express = require('express')
const router = express.Router()
// const Axios = require('axios')
const productController = require('../../controllers/product/index')

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getById)
router.post('/', productController.createProducts)
router.put('/:id', productController.updateProducts)
router.delete('/:id', productController.deleteProducts)

module.exports = router
