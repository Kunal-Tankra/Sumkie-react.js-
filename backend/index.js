const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())

app.use(express.json())

// available routes
app.use('/api/topSlider', require('./routes/topSlider'))
app.use('/api/bannerForSale', require('./routes/bannerForSale'))
app.use('/api/anotherCompanys', require('./routes/anotherCompanys'))
app.use('/api/newProducts', require('./routes/newProducts'))
app.use('/api/featuredProducts', require('./routes/featuredProducts'))
app.use('/api/secondBannerForSale', require('./routes/secondBannerForSale'))
app.use('/api/team', require('./routes/team'))
app.use('/api/ourBlog', require('./routes/ourBlog'))



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

