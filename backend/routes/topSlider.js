const express = require('express')
const TopSliderSchema = require('../models/TopSlider')
const router = express.Router()

// route: http://localhost:5000/api/topSlider/fetchTopSlider
router.get('/fetchTopSlider', async(req, res) => {
    
   const slider = await TopSliderSchema.find()
   res.json(slider)
    
})

module.exports = router