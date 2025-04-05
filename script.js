const apiKey = "ebd4d725403e6e4dfb52549a92a15641";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const result = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weatherResult").innerHTML = result;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
}
