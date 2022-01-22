exports.pageRoutes = `
const router = require('express').Router()
const { getHomePage } = require('../controllers/pageController');

router.get('/', getHomePage);

module.exports = router`