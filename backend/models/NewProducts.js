const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewProductsschema = new Schema({
  category: String,
  imgs: {
    goggle: String,
    modal: String
  },
  discountPer: String,
  saleTag: Boolean,
  stars: [Boolean, Boolean, Boolean, Boolean, Boolean],
  name: String,
  cutPrice: String,
  price: String

});

module.exports = mongoose.model('newProducts', NewProductsschema)



//     "imgs": {
//       "goggle": "g8.jpg",
//       "modal": "m8.jpg"
//   },
//   "discountPer": "-7%",
//   "saleTag": true,
//   "stars": [true,true,true,true,true],
//   "name": "Phenomenal Round Unisex Glasses",
//   "cutPrice": "₹51.00",
//   "price": "₹47.43"