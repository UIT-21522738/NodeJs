const express = require('express')
const router = express.Router()

const newController = require('../app/controllers/SearchController')

// newController.index
router.use('/', newController.index)

module.exports = router