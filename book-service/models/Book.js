const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedDate: Date,
});
module.exports = mongoose.model('Book', BookSchema);
