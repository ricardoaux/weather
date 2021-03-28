const logger = require('../utils/logger');
const Hook = require("../models/hook");
const {webHookValidation} = require("../validators/validator");
const {validationOptions} = require("../validators/validator");
const {removeWebhooks} = require("../services/weatherHookService");
const {addWebhook} = require("../services/weatherHookService");


const alertHook = async(req, res) => {
    logger.debug("Post new webhook...")

    const { error } = webHookValidation.validate(req.body, validationOptions);

    if (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    } else {
        try {
            addWebhook(new Hook(req.body.url, req.body.city, req.body.threshold)).then(res.send())
        } catch (e) {
            logger.error("Unchecked error while posting new webhook", e)
            res.status(500).send()
        }
    }
}

const deleteWebHook =  async(req, res) => {
    logger.debug("Delete webhooks...")

    try {
        removeWebhooks().then(() => {
            logger.info('Webhooks are deleted with success!')
            res.send()
        })
    } catch (e) {
        logger.error("Unchecked error while removing webhooks", e)
        res.status(500).send()
    }
}


module.exports = {alertHook, deleteWebHook}