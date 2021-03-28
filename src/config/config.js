let config = {}

config.connection = {
    port: 3000
}

config.webhook = {
    webhook_refresh_time_ms: 60000
}

config.log = {
    filename: 'logfile.log',
    level: 'debug',
    timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
}


module.exports = config