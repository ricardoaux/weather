const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const WeatherRouter = require("./routers/weather")
const HookRouter = require("./routers/webhook")
const ClientHookRouter = require("./routers/clientWebhook")

const apiV1Endpoint = '/api/v1';

const app = express()

app.use(cors())
app.use(morgan('short'))
app.use(bodyParser.json());

app.use(apiV1Endpoint, WeatherRouter)
app.use(apiV1Endpoint, HookRouter)
app.use(apiV1Endpoint, ClientHookRouter)


module.exports = app