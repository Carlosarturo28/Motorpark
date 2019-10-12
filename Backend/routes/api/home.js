const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
    return res.status(200).send('Motorpark CRUD API | Carlos Navarro - 2019.')
})

module.exports = router