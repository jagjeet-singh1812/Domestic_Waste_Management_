const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  small_desc: {
    type: String,
    required: true,
    unique: true,
  },
  long_desc: {
    type: String,
    required: true
  },
  publish_date: {
    type:String,
    required: true
  },
  author_name: {
    type: String,
    required: true
  },
  timestamp:{
    type:String,
    default:Date.now()
}
});

const Card = mongoose.model('Blogs', cardSchema);

module.exports = Card;
