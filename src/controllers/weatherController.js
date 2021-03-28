const logger = require('../utils/logger')
const {getWeatherDataByCity, getCapitals, getEuropeanCountries} = require("../services/weatherService")


const weatherByCity = async(req, res) => {
    logger.debug("Get weather to:", req.query.city)

    try {
        res.json(await getWeatherDataByCity(req.query.city.split(',')))

    } catch (e) {
        logger.error("Unchecked error while getting weather", e)
        res.status(500).send()
    }
}

const weatherByCapitals = async(req, res) => {
    logger.debug("Get all european capital's weather...")

    try {
        let countryNames = getEuropeanCountries()
        let capitals = getCapitals(countryNames)

        res.json(await getWeatherDataByCity(capitals))

    } catch (e) {
        logger.error("Unchecked error while getting european capital's weather", e)
        res.status(500).send()
    }
}


module.exports = {weatherByCity, weatherByCapitals}