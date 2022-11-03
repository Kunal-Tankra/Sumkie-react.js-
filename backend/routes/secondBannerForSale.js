const express = require('express')
const SecondBannerForSaleSchema = require('../models/SecondBannerForSale')
const router = express.Router()

// route: http://localhost:5000/api/secondBannerForSale/fetchSecondBannerForSale
router.get('/fetchSecondBannerForSale', async(req, res) => {
    
   const banners = await SecondBannerForSaleSchema.find()
   res.send(banners)
    
})

module.exports = router