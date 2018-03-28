const Items   = require('../models/items')

module.exports = {
  createItem: (req, res) => {
    Items.create({
      UserId    : req.body.UserId,
      ProductId : req.body.ProductId,
      name      : req.body.name,
      price     : req.body.price,
      stock     : req.body.stock,
      image     : req.body.image
    })
    .then(item => {
      res.status(200).json({
        message: 'success insert record',
        item
      })
    })
    .catch(err => {
      console.error(err)
      res.status(403).json({
        message: err.message
      })
    })
  },

  readItem: (req, res) => {
    Items.find()
    .populate(['ProductId', 'UserId'])
    .then(item => {
      res.status(200).json({
        message: 'record found',
        item
      })
    })
    .catch(err => {
      console.error(err)
      res.status(403).json({
        message: err.message
      })
    })
  },

  updateItem: (req, res) => {
    Items.findOneAndUpdate({
      '_id': req.params.id
    }, {
      $set: {
        UserId    : req.body.UserId,
        ProductId : req.body.ProductId,
        name      : req.body.name,
        price     : req.body.price,
        stock     : req.body.stock,
        image     : req.body.image
      }
    })
    .then(updated => {
      if (updated) {
        Items.findById(req.params.id)
        .populate(['ProductId', 'UserId'])
        .then(item => {
          res.status(200).json({
            message: 'success update record',
            item
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

  deleteItem: (req, res) => {
    Items.findByIdAndRemove(req.params.id)
    .then(item => {
      res.status(200).json({
        message: 'success delete record',
        item
      })
    })
    .catch(err => {
      res.status(403).json({
        message: 'id not found'
      })
    })
  }
}