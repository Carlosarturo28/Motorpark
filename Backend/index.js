const express = require('express')
const router = require('./routes/api')
const bodyParser = require('body-parser')
var cors = require('cors');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors());

app.use('/', router)

app.listen(process.env.PORT || 5000)

module.exports = app