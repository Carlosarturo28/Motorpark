const express = require('express')
const router = express.Router()
const home = require('./home')
const vehicles = require('./vehicles')

router.use('/vehicles', vehicles)

module.exports = router