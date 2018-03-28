const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

var productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required !!']
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('products', productSchema)