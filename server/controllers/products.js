const Products   = require('../models/products')

module.exports = {
  createProduct: (req, res) => {
    Products.create({
      name : req.body.name
    })
    .then(product => {
      res.status(200).json({
        message: 'success insert record',
        product
      })
    })
    .catch(err => {
      console.error(err)
      res.status(403).json({
        message: err.message
      })
    })
  },

  readProduct: (req, res) => {
    Products.find()
    .then(product => {
      res.status(200).json({
        message: 'record found',
        product
      })
    })
    .catch(err => {
      console.error(err)
      res.status(403).json({
        message: err.message
      })
    })
  },

  updateProduct: (req, res) => {
    Products.findOneAndUpdate({
      '_id': req.params.id
    }, {
      $set: {
        name : req.body.name
      }
    })
    .then(updated => {
      if (updated) {
        Products.findById(req.params.id)
        .then(product => {
          res.status(200).json({
            message: 'success update record',
            product
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

  deleteProduct: (req, res) => {
    Products.findByIdAndRemove(req.params.id)
    .then(product => {
      res.status(200).json({
        message: 'success delete record',
        product
      })
    })
    .catch(err => {
      res.status(403).json({
        message: 'id not found'
      })
    })
  }
}