// JS of Weather App
// Created by Scotty

//Runs the API
let weather = {
    "apiKey": "e56209a25977b2465f2f62739cd457b8", //API Key

    fetchWeather: function (city){ //Gets the weather data
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey

        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){ //Displays the weather
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".show-loc").innerText = "Weather in " + name; //Changes the Weather Location
        document.querySelector(".show-temp").innerText = temp + "°F"; //Changes the temperature for the location searched
        document.querySelector(".show-alert").innerText = description; //shows a description of what is happening in that location
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        
        //When search button is clicked change the background to whatever the icon matches
            if(icon == "01n"){
                //Clear Sky
                    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/175915.jpg')";
                
            }else if(icon == "02n"){
                //Few Clouds
                    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/175987.jpg')";

            }else if(icon == "03n"){
                //Scattered Clouds
                    document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/blue-sky-with-white-cloud_34152-3327.jpg?w=2000')";

            }else if(icon == "04n"){
                //Broken Clouds
                    document.body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/white-fluffy-clouds-clear-blue-sky-background-panorama-cumulus-cloud-texture-cloudy-azure-skies-backdrop-beautiful-cloudscape-224954447.jpg')";

            }else if(icon == "09n"){
                //Shower Rain
                    document.body.style.backgroundImage = "url('https://c0.wallpaperflare.com/preview/122/600/905/forest-haze-hd-wallpaper-landscape.jpg')";

            }else if(icon == "10n"){
                //Rain
                    document.body.style.backgroundImage = "url('https://myonecameraonelens.files.wordpress.com/2020/12/penllagaer-dscf5569.jpg?w=1200')";

            }else if(icon == "11n"){
                //Thunderstorm
                    document.body.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/5487c777e4b01bcc8b835e5e/1419203085417-9WTUWCENSOYYYLPN1XAV/how+to+photograph+shoot+capture+take+pictures+of+lightning+lightening+thunderstorms+weather?format=1000w')";

            }else if(icon == "13n"){
                //Snow
                    document.body.style.backgroundImage = "url('https://static01.nyt.com/images/2022/01/14/multimedia/14xp-snow-01/14xp-snow-01-videoSixteenByNineJumbo1600.jpg')";

            }else if(icon == "50n"){
                //Mist
                    document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/mist-lake-dawn-with-big-trees-mountains-range-reflected-calm-water-vintage-art-toned_638259-49.jpg?w=2000')";

            }else{
                //Default background
                document.body.style.backgroundImage = "url('https://static01.nyt.com/images/2022/01/14/multimedia/14xp-snow-01/14xp-snow-01-videoSixteenByNineJumbo1600.jpg')";
            }
        
    },

    search: function(){
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

//Using the search box 
    document.querySelector(".searchButton").addEventListener("click", function(){
        weather.search();
    });



//Opens Search Bar
    function opensearchbar(){
        var shows = document.getElementById("show-searchbar");
        var showb = document.getElementById("searchButton");

        if((shows.style.display === "none") && (showb.style.display === "none")){
            shows.style.display = "inline-block";
            showb.style.display = "inline-block";
        }else{
            shows.style.display = "none";
            showb.style.display = "none";
        }
    }

//This Functions searches for the location that is looked up using the search bar
    function lookup(){

    }

//