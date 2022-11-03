const express = require('express')
const FeaturedProductsSchema = require('../models/FeaturedProducts')
const router = express.Router()

// route: http://localhost:5000/api/featuredProducts/fetchFeaturedProducts
router.get('/fetchFeaturedProducts', async (req, res) => {

    const banners = await FeaturedProductsSchema.find()
    res.send(banners)

})

module.exports = router