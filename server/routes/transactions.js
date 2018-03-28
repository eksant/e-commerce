const express = require('express')
const router  = express.Router()
const { roleUser } = require('../middleware/authorization')
const { createTransaction, readTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactions')

router.post('/', roleUser, createTransaction)
router.get('/', roleUser, readTransaction)
router.put('/:id', roleUser, updateTransaction)
router.delete('/:id', roleUser, deleteTransaction)

module.exports = router;
