const logger = require('../utils/logger');
const express = require('express')

const router = new express.Router()


router.post('/webhook/client', async(req, res) => {
    logger.debug('Inside Callback hook', req.body)

    const data = req.body
    logger.warn(data)

    return res.status(200).send(data)
});


module.exports = router
