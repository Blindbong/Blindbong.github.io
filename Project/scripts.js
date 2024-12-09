/* Function: initMap
   - Initializes the Google Map centered on Julian, WV.
   - Fetches weather data once the map is initialized.
*/
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 38.1151, lng: -81.8405 }, // Coordinates for Julian, WV
        zoom: 10
    });
    // Add a marker at the specific location of Racing Shop
    var marker = new google.maps.Marker({ 
        position: { lat: 38.15665, lng: -81.85527 }, // Coordinates for Cline Family Racing Shop 
        map: map, 
        title: 'Cline Family Racing' 
    });

    // Fetch weather data
    fetchWeather();
}

/* Function: fetchWeather
   - Fetches current weather data for Julian, WV from OpenWeatherMap.
   - Updates the webpage with the fetched weather data.
   Variables:
   - apiKey: 77a0afb3868ada2d7eaff968d0bbc98d API key for OpenWeatherMap.
   - url: API endpoint for fetching weather data.
*/
function fetchWeather() {
    var apiKey = '77a0afb3868ada2d7eaff968d0bbc98d';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=Chapmanville&appid=' + apiKey + '&units=imperial';

    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            $('#weather').html('Temperature: ' + data.main.temp + '°F<br>Weather: ' + data.weather[0].description);
        },
        error: function(error) {
            console.error('Error fetching weather data:', error);
        }
    });
}

$(document).ready(function() {
    // Initialize the accordion for better visual layout of media
    $("#accordion").accordion(); 

    // Initialize Slick Carousel
    $('.image-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // Fetch weather data 
    fetchWeather(); 
});
