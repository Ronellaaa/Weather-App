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
   // var weatherWidget = document.getElementById('openweathermap-widget-22');
    var heading1 = document.getElementById('heading1');
    var heading2 = document.getElementById('heading2');
    var loginContainer = document.getElementById('loginContainer');
    var airContainer = document.getElementById('airContainer');
    var ForecastContainer1 = document.getElementById('ForecastContainer1');
    


    // Ensure that the greetings container and weather container are visible
    
    greetingsHeading.style.display = 'block';
    greetingsContainer.style.display = 'block';
    weatherContainer.style.display = 'block';
    ForecastContainer1.style.display = 'none';
    loginContainer.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'none';
    dailyForecastContainer.style.display = 'none';
   // weatherWidget.style.display = 'none';
    heading1.style.display = 'none';
    airContainer.style.display='none'

    toggleNavMenu();
}
function toggleMenuWeatherForecast(){
    var greetingsHeading =document.getElementById('greetingsHeading');
    var dailyForecastContainer = document.getElementById('dailyForecastContainer');
   // var weatherWidget = document.getElementById('openweathermap-widget-22');
    var greetingsContainer = document.getElementById('greetingsContainer');
    var weatherContainer = document.getElementById('weatherContainer');
    var heading1 = document.getElementById('heading1');
    var heading2 = document.getElementById('heading2');
    var loginContainer = document.getElementById('loginContainer');
    var airContainer = document.getElementById('airContainer');
    var ForecastContainer1 = document.getElementById('ForecastContainer1');
   
    dailyForecastContainer.style.display = 'block';
   // weatherWidget.style.display = 'block';
    heading1.style.display = 'block';
    ForecastContainer1.style.display = 'block';

    

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
 //   var weatherWidget = document.getElementById('openweathermap-widget-22');
    var greetingsContainer = document.getElementById('greetingsContainer');
    var weatherContainer = document.getElementById('weatherContainer');
    var loginContainer = document.getElementById('loginContainer');
    var heading1 = document.getElementById('heading1');
    var heading2 = document.getElementById('heading2');
    var airContainer = document.getElementById('airContainer');
    var ForecastContainer1 = document.getElementById('ForecastContainer1');
  

    greetingsHeading.style.display = 'none';
    dailyForecastContainer.style.display = 'none';
//    weatherWidget.style.display = 'none';
    greetingsContainer.style.display = 'none';
    weatherContainer.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'block';
    loginContainer.style.display='block'
    airContainer.style.display='none'
    ForecastContainer1.style.display = 'none';



    toggleNavMenu();

}
function toggleMenuAirQuality(){
    var greetingsHeading =document.getElementById('greetingsHeading');
    var dailyForecastContainer = document.getElementById('dailyForecastContainer');
 //   var weatherWidget = document.getElementById('openweathermap-widget-22');
    var greetingsContainer = document.getElementById('greetingsContainer');
    var weatherContainer = document.getElementById('weatherContainer');
    var loginContainer = document.getElementById('loginContainer');
    var heading1 = document.getElementById('heading1');
    var heading2 = document.getElementById('heading2');
    var airContainer = document.getElementById('airContainer');
    var ForecastContainer1 = document.getElementById('ForecastContainer1');
  
    
    greetingsHeading.style.display = 'none';
    dailyForecastContainer.style.display = 'none';
  //  weatherWidget.style.display = 'none';
    greetingsContainer.style.display = 'none';
    weatherContainer.style.display = 'none';
    heading1.style.display = 'none';
    heading2.style.display = 'none';
    loginContainer.style.display='none'
    airContainer.style.display='block'
    ForecastContainer1.style.display = 'none';



    toggleNavMenu();


}





// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData(location) {
    const apiKey = '6849fd2d1ca8df15cbf5f52af575d200'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

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
    const temperatureCelsius = Math.round(weatherData.main.temp - 273.15);


    // Construct HTML content to display weather data including the weather icon
    const htmlContent = `
        <h2>${weatherData.name}</h2>
        <p>Date: ${currentDateTime.toLocaleDateString()}</p>
        <p>Temperature: ${temperatureCelsius} °C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        <p>Pressure: ${weatherData.main.pressure} hPa</p>
        <img src="${iconUrl}" alt="Weather Icon"> <!-- Display weather icon -->
    `;

    // Set the HTML content to the weatherContainer div
    weatherContainer.innerHTML = htmlContent;
    
}
fetchWeatherData('Colombo');

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const location = document.querySelector('.form-control').value; // Get the input value
    fetchWeatherData(location); // Fetch weather data
    fetchDailyForecast(location); // Fetch daily forecast
}

// Add event listener to the form submit event
document.querySelector('.d-flex').addEventListener('submit', handleFormSubmit);

function addSearchEventListener() {
    document.getElementById('searchButton').addEventListener('click',()=>{
        const location =document.getElementById('searchInput').value;
        fetchDailyForecast(location);
        fetchWeatherData(location);
    });
}
document.addEventListener('DOMContentLoaded', addSearchEventListener);


function fetchDailyForecast(location) {
    const apiKey = '6849fd2d1ca8df15cbf5f52af575d200'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

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
    console.log("daily",dailyForecastData);

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
            const htmlContent = `
            <div class="col">
            ${dayOfWeek}: Unavailable
            </div>`;
            dailyForecastContainer.innerHTML += htmlContent;
        }
    }
}

fetchDailyForecast('Colombo');

function searchCity() {
    //Retrieves the value enetered in the input field with the id 'cityInput'
    const cityInput = document.getElementById('cityInput').value;
    fetchAirQualityData(cityInput);
}
async function fetchAirQualityData(city) {
    const apiKey = '6849fd2d1ca8df15cbf5f52af575d200';
    //sends GET request to the OpenWeatherMap API to fetch weather data for the specific country
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    //This takes the fetched data from the API which typically in JSON format and converts into a javascript object
    const data = await response.json();
    //these lines extract langtitude and longtidude in the city
    const lat =data.coord.lat;
    const lon =data.coord.lon;
    //These lines sends HTTP request to the OpenWeatherMap API to retrieve air quality data for the specified latitude and longitude coordinates
    const airQualityData = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const airQuality = await airQualityData.json();
    //This passes the airQuality object as the argument and this function will create a doughnut chart to visualize the air quality data.
    generateAirQualityChart(airQuality);
    console.log('Air quality data:', airQuality);
}
function generateAirQualityChart(airQuality) {
    // Extract relevant data from air quality response
    const labels = Object.keys(airQuality.list[0].components);
    const gas = Object.values(airQuality.list[0].components);
    console.log(gas);

    if (airQualityChart) {
        airQualityChart.destroy();
    }

    // Determine overall air quality based on thresholds
    const thresholdValue = {
        'Good' : 20,
        'Fair': 80,
        'Moderate': 250,
        'Poor': 350,
        'Very Poor': Infinity 

    };
    let overallQuality = 'Good';
    gas.forEach(value => {
        Object.entries(thresholdValue).forEach(([category, thresholdValue]) => {
            if (value > thresholdValue) {
                overallQuality = category;
            }
        });
    });
       

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
            aspectRatio: 2,
            responsive: true,
            maintainAspectRatio: true, 
            
            plugins: {
                legend: {
                    position: 'top',
                    align: 'center',
                    labels: {
                        color: 'black', // Color of the legend labels
                        font: {
                            size: 14, // Font size of the legend labels
                            family: 'Arial', // Font family of the legend labels
                            style: 'normal', // Font style of the legend labels: 'normal', 'italic', 'oblique'
                        },
                        padding: 10,
                },
            },
                title: {
                    display: true,
                    text: 'Air Quality Doughnut Chart (' + overallQuality + ')',
                    color:'Black'
                    
                    
                },
                animation: {
                    animateRotate: true 
                },
                
            }
            
        }
    });

     // Provide insights based on overall air quality
     const insightsElement = document.getElementById('airQualityInsights');
     insightsElement.innerText = `Overall Air Quality: ${overallQuality} \n`;
     switch(overallQuality){
        case 'Good':
            insightsElement.innerHTML += 'Air Quality is Good! Enjoy outdoor activities!';
            break;
        case 'Fair':
            insightsElement.innerHTML += 'Air Quality is Fair. People with respiratory issues may experience discomfort.';
            break;
        case 'Moderate':
            insightsElement.innerHTML += 'Air Quality is Moderate. Limit outdoor activities, especially if you have respiratory issues.';
            break;
        case 'Poor':
            insightsElement.innerHTML += 'Air Quality is Poor. Avoid outdoor activities, especially if you have respiratory issues.';
            break;
        case 'Very Poor':
            insightsElement.innerHTML += 'Air Quality is Very Poor. Stay indoors and avoid outdoor activities.';
            break;
        default:
            insightsElement.innerHTML += 'Air quality data unavailable.';
     }
 }

