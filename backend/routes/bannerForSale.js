const express = require('express')
const BannerForSaleSchema = require('../models/BannerForSale')
const router = express.Router()

// route: http://localhost:5000/api/bannerForSale/fetchBannerForSale
router.get('/fetchBannerForSale', async(req, res) => {
    
   const banners = await BannerForSaleSchema.find()
   res.send(banners)
    
})

module.exports = router