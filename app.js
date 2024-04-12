let airQualityChart; 

function toggleNavMenu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}

// Close the navigation menu when clicking outside of it
window.onclick = function(event) {
    var navMenu = document.getElementById("navMenu");
    var hamburger = document.querySelector('.hamburger');
    if (event.target != navMenu && event.target != hamburger && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
    }
};
function toggleHome() {
    var greetingsHeading =document.getElementById('greetingsHeading');
    var greetingsContainer = document.getElementById('greetingsContainer');
    var weatherContainer = document.getElementById('weatherContainer');
    var dailyForecastContainer = document.getElementById('dailyForecastContainer');
    var weatherWidget = document.getElementById('openweathermap-widget-21');
    var heading1 = document.getElementById('heading1');
    var heading2 = document.getElementById('heading2');
    var loginContainer = document.getElementById('loginContainer');
    var airContainer = document.getElementById('airContainer');


    // Ensure that the greetings container and weather container are visible
    greetingsHeading.style.display = 'block';
    greetingsContainer.style.display = 'block';
    weatherContainer.style.display = 'block';
    loginContainer.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'none';
    dailyForecastContainer.style.display = 'none';
    weatherWidget.style.display = 'none';
    heading1.style.display = 'none';
    airContainer.style.display='none'

    toggleNavMenu();
}
function toggleMenuWeatherForecast(){
    var greetingsHeading =document.getElementById('greetingsHeading');
    var dailyForecastContainer = document.getElementById('dailyForecastContainer');
    var weatherWidget = document.getElementById('openweathermap-widget-21');
    var greetingsContainer = document.getElementById('greetingsContainer');
    var weatherContainer = document.getElementById('weatherContainer');
    var heading1 = document.getElementById('heading1');
    var heading2 = document.getElementById('heading2');
    var loginContainer = document.getElementById('loginContainer');
    var airContainer = document.getElementById('airContainer');

    dailyForecastContainer.style.display = 'block';
    weatherWidget.style.display = 'block';
    heading1.style.display = 'block';
    

    // Ensure that the greetings container and weather container are visible
    greetingsHeading.style.display = 'none';
    greetingsContainer.style.display = 'none';
    weatherContainer.style.display = 'none';
    heading2.style.display = 'none';
    loginContainer.style.display = 'none';
    airContainer.style.display='none'



    toggleNavMenu();

}
function toggleLoginForm(){
    var greetingsHeading =document.getElementById('greetingsHeading');
    var dailyForecastContainer = document.getElementById('dailyForecastContainer');
    var weatherWidget = document.getElementById('openweathermap-widget-21');
    var greetingsContainer = document.getElementById('greetingsContainer');
    var weatherContainer = document.getElementById('weatherContainer');
    var loginContainer = document.getElementById('loginContainer');
    var heading1 = document.getElementById('heading1');
    var heading2 = document.getElementById('heading2');
    var airContainer = document.getElementById('airContainer');


    greetingsHeading.style.display = 'none';
    dailyForecastContainer.style.display = 'none';
    weatherWidget.style.display = 'none';
    greetingsContainer.style.display = 'none';
    weatherContainer.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    loginContainer.style.display='block'
    airContainer.style.display='none'



    toggleNavMenu();

}
function toggleMenuAirQuality(){
    var greetingsHeading =document.getElementById('greetingsHeading');
    var dailyForecastContainer = document.getElementById('dailyForecastContainer');
    var weatherWidget = document.getElementById('openweathermap-widget-21');
    var greetingsContainer = document.getElementById('greetingsContainer');
    var weatherContainer = document.getElementById('weatherContainer');
    var loginContainer = document.getElementById('loginContainer');
    var heading1 = document.getElementById('heading1');
    var heading2 = document.getElementById('heading2');
    var airContainer = document.getElementById('airContainer');
    
    greetingsHeading.style.display = 'none';
    dailyForecastContainer.style.display = 'none';
    weatherWidget.style.display = 'none';
    greetingsContainer.style.display = 'none';
    weatherContainer.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'none';
    loginContainer.style.display='none'
    airContainer.style.display='block'



    toggleNavMenu();


}





// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData(city) {
    const apiKey = '6849fd2d1ca8df15cbf5f52af575d200'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Fetch weather data from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the retrieved weather data
            displayWeatherData(data); // Pass the data to a function for displaying
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch request
            console.error('There was a problem with your fetch operation:', error);
        });
}

function displayWeatherData(weatherData) {
    const weatherContainer = document.getElementById('weatherContainer');

    // Log the weather data and time zone offset
    console.log("Data",weatherData);

    // Construct the URL for the weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

    // Get current date and time
    const currentDateTime = new Date(weatherData.dt * 1000); // Convert Unix timestamp to milliseconds


    // Construct HTML content to display weather data including the weather icon
    const htmlContent = `
        <h2>${weatherData.name}</h2>
        <p>Date: ${currentDateTime.toLocaleDateString()}</p>
        <p>Temperature: ${weatherData.main.temp} °C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        <p>Pressure: ${weatherData.main.pressure} hPa</p>
        <img src="${iconUrl}" alt="Weather Icon"> <!-- Display weather icon -->
    `;

    // Set the HTML content to the weatherContainer div
    weatherContainer.innerHTML = htmlContent;
    
}
fetchWeatherData('Colombo');


function fetchDailyForecast(city) {
    const apiKey = '6849fd2d1ca8df15cbf5f52af575d200'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayDailyForecast(data); // Pass the fetched data to the display function
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}


function displayDailyForecast(dailyForecastData) {
    const dailyForecastContainer = document.getElementById('dailyForecastContainer');
    dailyForecastContainer.innerHTML = ''; // Clear previous content

    // Loop through each day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 0; i < daysOfWeek.length; i++) {
          //This retieves the name of the week of the current location
        const dayOfWeek = daysOfWeek[i];

        // Find the forecast for the current day of the week
        const forecastForDay = dailyForecastData.list.find(forecast => {
            const date = new Date(forecast.dt * 1000);
            return date.toLocaleDateString('en-US', { weekday: 'long' }) === dayOfWeek;
        });
        
        // If forecast data is available for the current day, display it
        if (forecastForDay) {
              //This retrives the description of the current day of the week
            const forecast = forecastForDay.weather[0].description;
            //This retrives the temperature of the current day of the week and Convert temperature from Kelvin to Celsius and round it
            const temperature = Math.round(forecastForDay.main.temp - 273.15);
              //This retrives the icon of the current day of the week
            const iconCode = forecastForDay.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; // Construct icon URL
             //This constructs a HTML content string representing the forecast of the current day of the week and appends it to the  dailyForecastContainer
            const htmlContent = `
                <div class="col">
                <div>${dayOfWeek}</div>
                <div>${forecast}</div>
                <div>${temperature} °C</div>
                <img src="${iconUrl}" alt="${forecast}">
                </div>`;
            dailyForecastContainer.innerHTML += htmlContent;
             // If forecast data is not available for the current day, display a placeholder
        } else {
            const htmlContent = `<div class="col">${dayOfWeek}: N/A</div>`;
            dailyForecastContainer.innerHTML += htmlContent;
        }
    }
}

fetchDailyForecast('Colombo');

function searchCity() {
    const cityInput = document.getElementById('cityInput').value;
    fetchAirQualityData(cityInput);
}
async function fetchAirQualityData(city) {
    const apiKey = '6849fd2d1ca8df15cbf5f52af575d200';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();

    const lat =data.coord.lat;
    const lon =data.coord.lon;

   // const airQualityData=await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
   const airQualityData = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const airQuality = await airQualityData.json();

    generateAirQualityChart(airQuality);
    console.log('Air quality data:', airQuality);
}
function generateAirQualityChart(airQuality) {
    // Extract relevant data from air quality response
    const labels = Object.keys(airQuality.list[0].components);
    const gas = Object.values(airQuality.list[0].components);

    if (airQualityChart) {
        airQualityChart.destroy();
    }

    // Create chart using Chart.js
    const ctx = document.getElementById('airQualityChart').getContext('2d');
    airQualityChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Air Quality',
                data: gas,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                    


                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                    
                ],
                borderWidth: 1,
                

                
            }]
        },
        options: {
            responsive: true,
            
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Air Quality Doughnut Chart'
                    
                    
                },
                animation: {
                    animateRotate: true 
                },
                
            }
            
        }
    });
}
