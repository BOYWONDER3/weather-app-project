const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))


app.get('/weather', (req, res) => {
    const { lat, lon } = req.query
    console.log(lat, lon)
    res.send()
})

app.listen(3001)