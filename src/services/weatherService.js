const request = require('request')
const continents = require('country-data').continents
const countriesList = require("countries-list")
const wcc = require('world-countries-capitals')
const WeatherModel = require('../models/weather')
const logger = require('../utils/logger');


async function requestExternalWeatherData(city) {
    const apiKey = '8598a882c71c68aa0fbda863ed1d5776'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    return new Promise(function (resolve) {
        request(url, function (err, response, body) {
            if (err) {
                logger.error(err);
                throw err
            }
            resolve(body)
        })
    })
}

function getWeatherData(response) {
    let weatherEntries = JSON.parse(response)
    return new WeatherModel(
        weatherEntries.name,
        weatherEntries.main.temp,
        weatherEntries.main.temp_max,
        weatherEntries.main.temp_min,
        new Date(weatherEntries.sys.sunrise*1000),
        new Date(weatherEntries.sys.sunset*1000)
    )
}

async function getWeatherDataByCity(cities) {
    let result = []
    for (let city of cities) {
        try {
            let response = await requestExternalWeatherData(city)
            result.push(getWeatherData(response))
        } catch (e) {
            logger.error("Error getting weather to city: ", city)
        }
    }

    return result
}

function getEuropeanCountries() {
    let countries = continents.europe.countries
    return countries.map(code => countriesList.countries[code].name)
}

function getCapitals(countryNames) {
    let capitals = []
    for (let country of countryNames) {
        try {
            capitals.push(wcc.getCountryDetailsByName(country)[0].capital)
        } catch (e) {
            logger.error("Error getting capital to country: ", country)
        }
    }
    return capitals;
}


module.exports = {getWeatherDataByCity, requestExternalWeatherData, getCapitals, getEuropeanCountries}

