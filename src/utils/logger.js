const SimpleNodeLogger = require('simple-node-logger');
const logConfig = require("../config/config").log;

const opts = {
    level: logConfig.level,
    logFilePath: logConfig.filename,
    timestampFormat: logConfig.timestampFormat
};

const logger = SimpleNodeLogger.createSimpleLogger(opts);


module.exports = logger