const express = require('express')
const router = express.Router()
const url = require('url')

router.get('/', (req, res) => {
    res.send('hello')
})

module.exports = router