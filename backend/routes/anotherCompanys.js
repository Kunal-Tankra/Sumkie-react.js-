const express = require('express')
const AnotherCompanysSchema = require('../models/AnotherCompanys')
const router = express.Router()

// route: http://localhost:5000/api/anotherCompanys/fetchAnotherCompanys
router.get('/fetchAnotherCompanys', async (req, res) => {

    const banners = await AnotherCompanysSchema.find()
    res.send(banners)

})

module.exports = router