const mongoose  = require('mongoose')
const ObjectId  = mongoose.Types.ObjectId
const Schema    = mongoose.Schema

var itemSchema = new Schema({
  UserId: { 
    type: Schema.Types.ObjectId, 
    ref: 'users' 
  },
  ProductId: { 
    type: Schema.Types.ObjectId, 
    ref: 'products' 
  },
  name: {
    type: String,
    required: [true, 'Name is required !!']
  },
  price: {
    type: Number,
    required: [true, 'Price is required !!']
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required !!']
  },
  image: {
    type: String,
    required: [true, 'Image is required !!']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('items', itemSchema)