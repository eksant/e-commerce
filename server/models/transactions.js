const mongoose  = require('mongoose')
const ObjectId  = mongoose.Types.ObjectId
const Schema    = mongoose.Schema

var transactionSchema = new Schema({
  UserId: { 
    type: Schema.Types.ObjectId, 
    ref: 'users' 
  },
  ProductId: { 
    type: Schema.Types.ObjectId, 
    ref: 'products' 
  },
  qty: {
    type: Number,
    required: [true, 'Quantity is required !!']
  },
  status: {
    type: Number
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('transactions', transactionSchema)