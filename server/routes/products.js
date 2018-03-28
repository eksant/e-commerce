const express = require('express')
const router  = express.Router()
const { roleAdmin } = require('../middleware/authorization')
const { createProduct, readProduct, updateProduct, deleteProduct } = require('../controllers/products')

router.post('/', roleAdmin, createProduct)
router.get('/', readProduct)
router.put('/:id', roleAdmin, updateProduct)
router.delete('/:id', roleAdmin, deleteProduct)

module.exports = router;
