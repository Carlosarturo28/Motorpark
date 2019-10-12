const express = require('express')
const router = require('./routes/api')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', router)

app.listen(process.env.PORT || 5000)