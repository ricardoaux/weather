const logger = require('../utils/logger');
const webhookConfig = require("../config/config").webhook;
const Webhooks = require('node-webhooks');
const {requestExternalWeatherData} = require("./weatherService");

const webhookShortname = "webhook";

const webHooks = new Webhooks({
    db: './resources/webHooksDB.json'
})


async function addWebhook(webhookData) {
    logger.info("Register webhookShortname: ", webhookData)
    webHooks.add(webhookShortname, webhookData.url)

    setInterval(function () {
        checkTemperatureByCity(webhookData.city, webhookData.threshold)
    }, webhookConfig.webhook_refresh_time_ms)
}

async function checkTemperatureByCity(city, threshold) {
    let weatherData = await requestExternalWeatherData(city)
    let weatherEntry = JSON.parse(weatherData)
    let actualTemp = weatherEntry.main.temp;

    if (actualTemp >= threshold) {
        webHooks.trigger(webhookShortname, {msg: "Temperature alert!!!", city: city, temp: actualTemp});
    }
}

async function removeWebhooks() {
    webHooks.remove(webhookShortname).catch(function(err){
        logger.error(err)
        throw err
    })
}


module.exports = {addWebhook, removeWebhooks}