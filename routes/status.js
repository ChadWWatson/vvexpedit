const router = require('express').Router()
const statusController = require('../controllers/statusController')

router.get('/', statusController.base)

module.exports = router
