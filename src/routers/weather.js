const express = require('express')
const {weatherByCity, weatherByCapitals} = require("../controllers/weatherController")


const router = new express.Router()

router.get('/weather', weatherByCity);

router.get('/weather/capitals', weatherByCapitals);


module.exports = router

