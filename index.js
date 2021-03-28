require('dotenv').config()
const connectionConfig = require("./src/config/config").connection;
const app = require('./src/app')
const logger = require('./src/utils/logger');
const port = process.env.PORT || connectionConfig.port


app.listen(port, () => {
    logger.info(`Server is running on port ${port}`)
})