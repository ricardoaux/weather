const express = require('express')
const {deleteWebHook} = require("../controllers/weatherHookController");
const {alertHook} = require("../controllers/weatherHookController");
const router = new express.Router()

router.post("/weather/alert", alertHook)

router.delete('/weather/alert', deleteWebHook);


module.exports = router