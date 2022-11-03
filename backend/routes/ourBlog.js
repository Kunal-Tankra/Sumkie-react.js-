const express = require('express')
const OurBlogSchema = require('../models/OurBlog')
const router = express.Router()

// route: http://localhost:5000/api/ourBlog/fetchOurBlog
router.get('/fetchOurBlog', async(req, res) => {
    
   const banners = await OurBlogSchema.find()
   res.json(banners)
    
})

module.exports = router