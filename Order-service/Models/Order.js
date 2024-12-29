const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Customer' },
  bookId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Book' },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Order', OrderSchema);
