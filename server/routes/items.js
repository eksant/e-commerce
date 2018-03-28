const express = require('express')
const router  = express.Router()
const { roleAdmin } = require('../middleware/authorization')
const { createItem, readItem, updateItem, deleteItem } = require('../controllers/items')

router.post('/', roleAdmin, createItem)
router.get('/', roleAdmin, readItem)
router.put('/:id', roleAdmin, updateItem)
router.delete('/:id', roleAdmin, deleteItem)

module.exports = router;
