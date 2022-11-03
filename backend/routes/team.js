const express = require('express')
const TeamSchema = require('../models/Team')
const router = express.Router()

// route: http://localhost:5000/api/team/fetchTeam
router.get('/fetchTeam', async(req, res) => {
    
   const banners = await TeamSchema.find()
   res.json(banners)
    
})

module.exports = router