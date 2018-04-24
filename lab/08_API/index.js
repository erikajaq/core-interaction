


// Insert your actual API request URL below
fetch('https://api.openweathermap.org/data/2.5/weather?zip=11211&APPID=7b7011922b1e7b66be689f613bcad17f&units=imperial')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render (jsonData);
    });

//Render function set up
    var tempSpan = document.querySelector('.temp');

    var windSpeedSpan = document.querySelector('.wind-speed');

    var windDirSpan = document.querySelector('.wind-dir');

    var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper');

    var weatherVane = document.querySelector('.weather-vane');

    function render (data){
      //Log the data in its entirety
      console.log(data);
      //Log the current temperature..names gotten from data set from weather thing
      console.log(data.main.temp);

      //insert the temperature
      tempSpan.innerText = data.main.temp;
      //insert the wind speed

      console.log(data.wind.speed);
      windSpeedSpan.innerText = data.wind.speed;
      //insert the wind direction

      console.log(data.wind.deg);
      windDirSpan.innerText = data.wind.deg;

      //set background color based on temp
      document.body.style.backgroundColor = 'hsl('+ data.wind.deg+ ',50%,50%)';

      //rotate weather vane based on wind dir
      weatherVaneWrapper.style.transform = 'rotate('+ data.wind.deg + 'deg)';

      //sert animation duration weatherVane
      weatherVane.style.animationDuration = 5 / data.wind.speed + 's';


    }
