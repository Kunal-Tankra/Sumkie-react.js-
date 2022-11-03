const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamSchema = new Schema({
    about: String,
    img: String,
    name: String,
    post: String
  });

  module.exports = mongoose.model('team', TeamSchema)

  