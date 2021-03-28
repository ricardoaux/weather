class Weather {

    constructor(city, actual, max, min, sunrise, sunset) {
        this.city = city;
        this.temperatureActual = actual;
        this.temperatureMax = max;
        this.temperatureMin = min;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }
}

module.exports = Weather