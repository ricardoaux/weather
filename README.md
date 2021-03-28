# weather

```sh
cd weather
npm install
node index.js
```

## Defaults

You can change default configs in /src/config/config.js
port: 3000
log_filename: logfile.log
log_level: DEBUG


## Endpoints

| HTTTP Method | Description | Endpoint (Example) |
| ------ | ------ | ------ |
| GET | Get weather by city (or cities) | http://localhost:3000/api/v1/weather?city=Lisboa,Coimbra |
| GET | Get weather to European's Capitals | http://localhost:3000/api/v1/weather/capitals |
| POST | Register webhook | http://localhost:3000/api/v1/weather/alert |
| DELETE | Delete webhooks' register | http://localhost:3000/api/v1/weather/alert |


### Example Json Body to Post Request (Register Webhoook)
```
{
	"url": "http://f147fae72995.ngrok.io/api/v1/webhook/client",
	"city": "Coimbra",
	"threshold": 10
}
```
