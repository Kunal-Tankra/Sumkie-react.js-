const mongoose = require('mongoose');
const { Schema } = mongoose;

const TopSliderSchema = new Schema({
    img: String,
    title: String,
    discountPer:  String,
    discountRate:  String
  });

  module.exports = mongoose.model('topSlider', TopSliderSchema)