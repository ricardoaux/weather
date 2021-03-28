# Weather API

It is my first node.js application!

## Run

```sh
cd weather
npm install
node index.js
```

## Defaults

You can change default configs in /src/config/config.js
```
port: 3000
log_filename: logfile.log
log_level: DEBUG
```

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

### Example Json Response to Get Weather
```
[
  {
    "city": "Lisbon",
    "temperatureActual": 22.88,
    "temperatureMax": 23.33,
    "temperatureMin": 22.22,
    "sunrise": "2021-03-28T06:27:17.000Z",
    "sunset": "2021-03-28T18:55:35.000Z"
  },
  {
    "city": "Coimbra",
    "temperatureActual": 24.23,
    "temperatureMax": 24.44,
    "temperatureMin": 23.89,
    "sunrise": "2021-03-28T06:23:48.000Z",
    "sunset": "2021-03-28T18:53:22.000Z"
  }
]
```

## Improvements
- Add unit tests
- Use mongo (or similar) to register webhook data
- Separate logs in multiple files
- Improve exception handler
