// set the input fields to get the latitude and longitude from the user
const latitude = document.querySelector("div .latitude");
const longitude = document.querySelector("div .longitude");

// 10.98799979046275, 77.12591820684005

// Selecting the elements from the DOM to display the values
const displayPlace = document.querySelector("div .place");
const displayCountry = document.querySelector("div .country");
const displayLatitude = document.querySelector("div .display-latitude");
const displayLongitude = document.querySelector("div .display-longitude");
const displayCondition = document.querySelector("div .condition");
const displayDescription = document.querySelector("div .description");
const displayTemperature = document.querySelector("div .temperature");
const displayPressure = document.querySelector("div .pressure");
const displayHumidity = document.querySelector("div .humidity");

// Display an alert message if user input is invalid
const displayAlert = document.querySelector(".display-error");

// This function would be called if the response received successfully from the server
function getWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=dee597c90afe943d04c1fc84f29140fe`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        if(res.cod != "400"){
            displayAlert.innerHTML = "";
            displayWeather(res);
        }else{
            displayError();
        }
    })
}

// Display the values from the server
function displayWeather(res){
    displayPlace.innerHTML = `<span class="text-primary text-center fw-bold">Place:</span> ${res.name}`;
    displayCountry.innerHTML = `<span class="text-primary text-center fw-bold">Country:</span> ${res.sys.country}`;
    displayLatitude.innerHTML = `<span class="text-primary text-center fw-bold">Latitude:</span> ${res.coord.lat}`;
    displayLongitude.innerHTML = `<span class="text-primary text-center fw-bold">Longitude:</span> ${res.coord.lon}`;
    displayCondition.innerHTML = `<span class="text-primary text-center fw-bold">Weather Condition:</span> ${res.weather[0].main}`;
    displayDescription.innerHTML = `<span class="text-primary text-center fw-bold">Weather Description: ${res.weather[0].description}`;
    displayTemperature.innerHTML = `<span class="text-primary text-center fw-bold">Temperature:</span> ${res.main.temp}`;
    displayPressure.innerHTML = `<span class="text-primary text-center fw-bold">Pressure:</span> ${res.main.pressure}`;
    displayHumidity.innerHTML = `<span class="text-primary text-center fw-bold">Humidity:</span> ${res.main.humidity}`;

}

// Display alert message
function displayError(){
    displayAlert.innerHTML = `<div class="alert alert-danger" role="alert">
  Invalid Latitude or Longitude or both
</div>`
}