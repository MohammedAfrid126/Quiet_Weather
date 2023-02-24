const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': '1tEGjm3U8WLScNje/DzpZw==4hazyrI3RNrJk0N2'
    }
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }

const getWeather = (city) =>{
    cityName.innerHTML = capitalizeFirstLetter(city);
    fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, options)
    .then((response) => {
        return response.json()
    })
    .then((response) =>{
        cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML= response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}


    
const getWeather1 = () =>{
    fetch(`https://api.api-ninjas.com/v1/weather?city=Delhi`, options)
    .then((response) => {
    return response.json()
    })
    .then((response) =>{
        cloud_pctD.innerHTML = response.cloud_pct;
        tempD.innerHTML= response.temp;
        feels_likeD.innerHTML = response.feels_like;
        humidityD.innerHTML = response.humidity;
        min_tempD.innerHTML = response.min_temp;
        max_tempD.innerHTML = response.max_temp;
        wind_speedD.innerHTML = response.wind_speed;
        wind_degreesD.innerHTML = response.wind_degrees;
        sunriseD.innerHTML = response.sunrise;
        sunsetD.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}
const getWeather2 = () =>{
    fetch(`https://api.api-ninjas.com/v1/weather?city=Hyderabad`, options)
    .then((response) => {
    return response.json()
    })
    .then((response) =>{
        cloud_pctH.innerHTML = response.cloud_pct;
        tempH.innerHTML= response.temp;
        feels_likeH.innerHTML = response.feels_like;
        humidityH.innerHTML = response.humidity;
        min_tempH.innerHTML = response.min_temp;
        max_tempH.innerHTML = response.max_temp;
        wind_speedH.innerHTML = response.wind_speed;
        wind_degreesH.innerHTML = response.wind_degrees;
        sunriseH.innerHTML = response.sunrise;
        sunsetH.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}
const getWeather3 = () =>{
    fetch(`https://api.api-ninjas.com/v1/weather?city=Bengaluru`, options)
    .then((response) => {
    return response.json()
    })
    .then((response) =>{
        cloud_pctB.innerHTML = response.cloud_pct;
        tempB.innerHTML= response.temp;
        feels_likeB.innerHTML = response.feels_like;
        humidityB.innerHTML = response.humidity;
        min_tempB.innerHTML = response.min_temp;
        max_tempB.innerHTML = response.max_temp;
        wind_speedB.innerHTML = response.wind_speed;
        wind_degreesB.innerHTML = response.wind_degrees;
        sunriseB.innerHTML = response.sunrise;
        sunsetB.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}
const getWeather4 = () =>{
    fetch(`https://api.api-ninjas.com/v1/weather?city=Shanghai`, options)
    .then((response) => {
    return response.json()
    })
    .then((response) =>{
        cloud_pctS.innerHTML = response.cloud_pct;
        tempS.innerHTML= response.temp;
        feels_likeS.innerHTML = response.feels_like;
        humidityS.innerHTML = response.humidity;
        min_tempS.innerHTML = response.min_temp;
        max_tempS.innerHTML = response.max_temp;
        wind_speedS.innerHTML = response.wind_speed;
        wind_degreesS.innerHTML = response.wind_degrees;
        sunriseS.innerHTML = response.sunrise;
        sunsetS.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click", (event) =>{
    getWeather(city.value);
    event.preventDefault();
})
getWeather("delhi");
getWeather1();
getWeather2();
getWeather3();
getWeather4();