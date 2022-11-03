const mongoose = require('mongoose');
const { Schema } = mongoose;

const FeaturedProductsschema = new Schema({
    category: String,
    imgs: {
        goggle: String,
        modal: String
    },
    discountPer: String,
    saleTag: Boolean,
    stars: [Boolean,Boolean,Boolean,Boolean,Boolean],
    name: String,
    cutPrice: String,
    price: String
    
  });

  module.exports = mongoose.model('featuredProducts', FeaturedProductsschema)
  
  
  
   