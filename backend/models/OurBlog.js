const mongoose = require('mongoose');
const { Schema } = mongoose;

const OurBlogSchema = new Schema({
    img: String,
    date: String,
    summery: String
    
  });

  module.exports = mongoose.model('ourBlog', OurBlogSchema)

  