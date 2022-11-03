const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnotherCompanyschema = new Schema({
    img: String,
    
  });

  module.exports = mongoose.model('anotherCompanys', AnotherCompanyschema)