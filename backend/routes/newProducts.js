const express = require('express')
const NewProductsSchema = require('../models/NewProducts')
const router = express.Router()

// route: http://localhost:5000/api/newProducts/fetchnewProducts
router.get('/fetchnewProducts', async (req, res) => {

    const banners = await NewProductsSchema.find()
    res.send(banners)

})

module.exports = router