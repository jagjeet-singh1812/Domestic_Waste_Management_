const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true
  },
  timestamp:{
      type:String,
      default:Date.now()
  }
});

const SampleRequest = mongoose.model('Newsletter',NewsletterSchema);

module.exports = SampleRequest;
