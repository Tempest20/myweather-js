// initialisation 
let cityInput = document.getElementById("cityInput");
let cityName = document.getElementById("cityName");
let temp = document.getElementById("temp");
let desc = document.getElementById("desc");
let button = document.getElementById("button");

// button function
button.addEventListener("click", () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&APPID=3be5bb848a98ee3ef61a7da298e6cff6')
    .then(response => response.json())
    .then(data => {
        let dataName = data['name'];
        //cityName.innerHTML = dataName;

        let dataTemp = data['main']['temp'];
        dataTemp = parseFloat(dataTemp);
        // conversion from Kelvin to Celsius
        dataTemp = Math.round(dataTemp - 273.15);
        //temp.innerHTML = dataTemp + "° C";

        let dataDesc = data['weather'][0]['description'];
        //desc.innerHTML = dataDesc;

        weatherBalloon(dataName, dataTemp, dataDesc);

    })
    // error handler
    .catch( () => {
        desc.innerHTML = "Unavailable";
        temp.innerHTML = "Unavailable";
        cityName.innerHTML = "Please enter a valid city";
    })
})


let weatherBalloon = (n, t, d) => {

    $(document).ready(function() {
        $("#cityName").hide();
        $("#temp").hide();
        $("#desc").hide();

        cityName.innerHTML = n;
        temp.innerHTML = t + "° C";
        desc.innerHTML = d; 

        $("#cityName").fadeIn("1000", function() {
            $("#temp").fadeIn("1000", function() {
                $("#desc").fadeIn("1000");
            });
        });
    });
}
