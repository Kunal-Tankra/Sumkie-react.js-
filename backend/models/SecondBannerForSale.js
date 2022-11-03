const mongoose = require('mongoose');
const { Schema } = mongoose;

const SecondBannerForSaleSchema = new Schema({
    img: String,
    discount:  String,
    title: String,
  });

  module.exports = mongoose.model('secondBannerForSale', SecondBannerForSaleSchema)

  
