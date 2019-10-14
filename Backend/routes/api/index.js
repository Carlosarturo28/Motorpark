const express = require('express')
const router = express.Router()
const home = require('./home')
const vehicles = require('./vehicles')
const brands = require('./brands')

router.use('/vehicles', vehicles)
router.use('/brands', brands)
router.use('', home)

module.exports = router