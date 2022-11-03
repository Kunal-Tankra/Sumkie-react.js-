const mongoose = require('mongoose');
const { Schema } = mongoose;

const BannerForSaleSchema = new Schema({
    img: String,
    discount:  String,
    title: String,
  });

  module.exports = mongoose.model('bannerForSale', BannerForSaleSchema)

  