const weather_request = require('request');
const Weather_API_Key = 'e5a058c1197d243a374528747c7b7874'

var get_Weather = (lng, lat) =>{
    weather_request({
        url: `https://api.darksky.net/forecast/${Weather_API_Key}/${lng},${lat}`,
        json: true
        }, (error, response, body)=>{
            if (error){
                console.log('Unable to connect to weather forecast servers!');

            }
            else if(response.statusCode=== 400){
                console.log('Unable to fetch weather data!');
            }
            else if(!error && response.statusCode===200){
                console.log(`Details: ${body.currently.summary}`);
                console.log(`Current Temperature: ${body.currently.temperature}`);
                console.log(`Feels like: ${body.currently.apparentTemperature}`);
                console.log(`Wind Speed: ${body.currently.windSpeed}`);
                console.log(`Distance (miles) from nearest storm: ${body.currently.nearestStormDistance}`);
            }
            else{
                console.log('Unable to fetch weather data!');
            }
                  
        }
    );
};

module.exports.weatherData = get_Weather;


