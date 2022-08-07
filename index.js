require('dotenv').config
const express = require('express')
const app = express()

app.use('/places', require('./controllers/plaaces'))

app.get('/', function(req, res) {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 FILE NOT FOUND</h1>')
})

app.listen(process.env.PORT)