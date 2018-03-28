const Transactions   = require('../models/transactions')

module.exports = {
  createTransaction: (req, res) => {
    Transactions.create({
      UserId    : req.body.UserId,
      ProductId : req.body.ProductId,
      qty       : req.body.qty,
      status    : 0
    })
    .then(transaction => {
      res.status(200).json({
        message: 'success insert record',
        transaction
      })
    })
    .catch(err => {
      console.error(err)
      res.status(403).json({
        message: err.message
      })
    })
  },

  readTransaction: (req, res) => {
    Transactions.find()
    .populate(['ProductId', 'UserId'])
    .then(transaction => {
      res.status(200).json({
        message: 'record found',
        transaction
      })
    })
    .catch(err => {
      console.error(err)
      res.status(403).json({
        message: err.message
      })
    })
  },

  updateTransaction: (req, res) => {
    Transactions.findOneAndUpdate({
      '_id': req.params.id
    }, {
      $set: {
        UserId    : req.body.UserId,
        ProductId : req.body.ProductId,
        qty       : req.body.qty,
        status    : 0
      }
    })
    .then(updated => {
      if (updated) {
        Transactions.findById(req.params.id)
        .populate(['ProductId', 'UserId'])
        .then(transaction => {
          res.status(200).json({
            message: 'success update record',
            transaction
          })
        })
        .catch(err => {
          console.error(err)
          res.status(403).json({
            message: err.message
          })
        })
      } else {
        res.status(404).json({
          message: 'record not found'
        })
      }
    })
    .catch(err => {
      console.error(err)
      res.status(403).json({
        message: err.message
      })
    })
  },

  deleteTransaction: (req, res) => {
    Transactions.findByIdAndRemove(req.params.id)
    .then(transaction => {
      res.status(200).json({
        message: 'success delete record',
        transaction
      })
    })
    .catch(err => {
      res.status(403).json({
        message: 'id not found'
      })
    })
  }
}