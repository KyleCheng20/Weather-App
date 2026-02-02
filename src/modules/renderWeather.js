import { formatTemp } from "./tempConversion";
import { weatherAssets } from "./weatherAssets";

export function renderWeather(weatherData, unit){
    const location = document.querySelector(".location");
    const currTemp = document.querySelector(".current-temp");
    const highLow = document.querySelector(".high-low");
    const currFeelsLike = document.querySelector(".feels-like");
    const dateTime = document.querySelector(".date-time");
    const currCondition = document.querySelector(".current-condition");
    const currDescription = document.querySelector(".current-description");

    const windSpeedValue = document.querySelector(".wind-speed-value");
    const windGustValue = document.querySelector(".wind-gust-value");
    const windDirectionValue = document.querySelector(".wind-direction-value");

    const uvValue = document.querySelector(".uv-value");
    const uvDescription = document.querySelector(".uv-description");

    const humidityValue = document.querySelector(".humidity-value");
    const humidityDescription = document.querySelector(".humidity-description");

    const visibilityValue = document.querySelector(".visibility-value");
    const visibilityDescription = document.querySelector(".visibility-description");

    const forecastContainer = document.querySelector(".forecast-container");

    const body = document.body;
    const currentIconImg = document.querySelector(".current-weather-icon");

    const currentIcon = weatherData.current.icon;
    const weatherImg = weatherAssets[currentIcon];

    if(weatherImg){
        body.style.backgroundImage = `url(${weatherImg.bg})`;
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
    }


    forecastContainer.innerHTML = "";

    // Top
    if(weatherImg){
        currentIconImg.src = weatherImg.icon;
        currentIconImg.alt = weatherData.current.icon;
    }
    location.textContent = weatherData.location;
    currTemp.textContent = formatTemp(weatherData.current.temp, unit);
    highLow.textContent = `H: ${formatTemp(weatherData.today.high, unit)} / L: ${formatTemp(weatherData.today.low, unit)}`;

    // Bottom
    currFeelsLike.textContent = `Feels like: ${formatTemp(weatherData.current.feelsLike, unit)}`;
        
    const currDateObj = new Date(`${weatherData.today.date}T${weatherData.current.time}`);
    const todayDate = currDateObj.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    const todayTime = currDateObj.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "2-digit"
    });

    dateTime.textContent = `${todayDate}, ${todayTime}`;

    currCondition.textContent = weatherData.current.conditions;
    currDescription.textContent = weatherData.current.description;

    windSpeedValue.textContent = weatherData.current.wind.speed;
    windGustValue.textContent = weatherData.current.wind.gust;
    windDirectionValue.textContent = `${weatherData.current.wind.direction}°`;

    const uvIndex = weatherData.current.uvIndex;
    uvValue.textContent = uvIndex;
    if(uvIndex <= 2){
        uvDescription.textContent = "Low";
    } else if(uvIndex <= 5){
        uvDescription.textContent = "Moderate";
    } else if(uvIndex <= 7){
        uvDescription.textContent = "High";
    } else if(uvIndex <= 10){
        uvDescription.textContent = "Very high"
    } else{
        uvDescription.textContent = "Extreme";
    };

    const humidity = weatherData.current.humidity;
    humidityValue.textContent = `${humidity}%`;
    if(humidity <= 30){
        humidityDescription.textContent = "Dry";
    } else if(humidity <= 50){
        humidityDescription.textContent = "Comfortable";
    } else if(humidity <= 70){
        humidityDescription.textContent = "Humid";
    } else {
        humidityDescription.textContent = "Muggy"
    };

    const visibility = weatherData.current.visibility;
    visibilityValue.textContent = `${visibility} mi`;
    if(visibility <= 2){
        visibilityDescription.textContent = "Poor";
    } else if(visibility <= 5){
        visibilityDescription.textContent = "Low";
    } else if(visibility <= 10){
        visibilityDescription.textContent = "Moderate";
    } else {
        visibilityDescription.textContent = "Clear"
    };

    // Next 7 days forecast
    weatherData.forecast.forEach(day => {
        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day-container");

        const dayTop = document.createElement("div");
        dayTop.classList.add("day-top");

        const dayBottom = document.createElement("div");
        dayBottom.classList.add("day-bottom");

        const forecastTopInfo = document.createElement("div");
        forecastTopInfo.classList.add("forecast-top-info");

        const dayOfWeek = document.createElement("p");
        dayOfWeek.classList.add("day-of-week");

        const forecastDate = document.createElement("p");
        forecastDate.classList.add("forecast-date");

        const forecastIcon = document.createElement("img");
        forecastIcon.classList.add("forecast-icon");

        const forecastTemp = document.createElement("p");
        forecastTemp.classList.add("forecast-temp");

        const forecastHighLow = document.createElement("p");
        forecastHighLow.classList.add("forecast-high-low");

        const forecastFeelsLike = document.createElement("p");
        forecastFeelsLike.classList.add("forecast-feels-like");

        const forecastCondition = document.createElement("p");
        forecastCondition.classList.add("forecast-condition");

        const forecastWindSpeedContainer = document.createElement("div");
        forecastWindSpeedContainer.classList.add("forecast-wind-speed-container");
        const forecastWindSpeed = document.createElement("p");
        const forecastWindSpeedValue = document.createElement("span");

        const forecastWindGustContainer = document.createElement("div");
        forecastWindGustContainer.classList.add("forecast-wind-gust-container");
        const forecastWindGust = document.createElement("p");
        const forecastWindGustValue = document.createElement("span");

        const forecastWindDirectionContainer = document.createElement("div");
        forecastWindDirectionContainer.classList.add("forecast-wind-direction-container");
        const forecastWindDirection = document.createElement("p");
        const forecastWindDirectionValue = document.createElement("span");

        const forecastUVContainer = document.createElement("div");
        forecastUVContainer.classList.add("forecast-uv-container");
        const forecastUV = document.createElement("p");
        const forecastUVValue = document.createElement("span");

        const forecastHumidityContainer = document.createElement("div");
        forecastHumidityContainer.classList.add("forecast-humidity-container");
        const forecastHumidity = document.createElement("p");
        const forecastHumidityValue = document.createElement("span");

        const forecastVisibilityContainer = document.createElement("div");
        forecastVisibilityContainer.classList.add("forecast-visibility-container");
        const forecastVisibility = document.createElement("p");
        const forecastVisibilityValue = document.createElement("span");


        // Day container top
        const [year, month, dayNum] = day.date.split("-");  // Destructure date into array
        const dateObj = new Date(year, month - 1, dayNum);

        const weekday = dateObj.toLocaleString("en-us", {
            weekday: "long"
        });

        const fullDate = dateObj.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric"
        });

        const forecastImgIcon = weatherAssets[day.icon];
        if(forecastImgIcon){
            forecastIcon.src = forecastImgIcon.icon;
            forecastIcon.alt = day.icon;
        }

        dayOfWeek.textContent = weekday;
        forecastDate.textContent = fullDate;

        forecastTemp.textContent = formatTemp(day.temp, unit);
        forecastHighLow.textContent = `H: ${formatTemp(day.high, unit)} / L: ${formatTemp(day.low, unit)}`;
        forecastFeelsLike.textContent = `Feels like: ${formatTemp(day.feelsLike, unit)}`;
        forecastCondition.textContent = day.conditions;

        // Day container bottom
        forecastWindSpeed.textContent = "Wind speed";
        forecastWindSpeedValue.textContent = `${day.wind.speed} mph`;
        forecastWindSpeedContainer.append(forecastWindSpeed, forecastWindSpeedValue);

        forecastWindGust.textContent = "Wind gust";
        forecastWindGustValue.textContent = `${day.wind.gust} mph`;
        forecastWindGustContainer.append(forecastWindGust, forecastWindGustValue);

        forecastWindDirection.textContent = "Wind direction";
        forecastWindDirectionValue.textContent = `${day.wind.direction}°`;
        forecastWindDirectionContainer.append(forecastWindDirection, forecastWindDirectionValue);

        forecastUV.textContent = "UV Index";
        forecastUVValue.textContent = day.uvIndex;
        forecastUVContainer.append(forecastUV, forecastUVValue);

        forecastHumidity.textContent = "Humidity";
        forecastHumidityValue.textContent = `${day.humidity}%`;
        forecastHumidityContainer.append(forecastHumidity, forecastHumidityValue);

        forecastVisibility.textContent = "Visibility";
        forecastVisibilityValue.textContent = `${day.visibility} mi`;
        forecastVisibilityContainer.append(forecastVisibility, forecastVisibilityValue);

        forecastTopInfo.append(forecastTemp, forecastHighLow, forecastFeelsLike, forecastCondition);

        dayTop.append(dayOfWeek, forecastDate, forecastIcon, forecastTopInfo);
        dayBottom.append(forecastWindSpeedContainer, forecastWindGustContainer, forecastWindDirectionContainer, forecastUVContainer, forecastHumidityContainer, forecastVisibilityContainer);

        dayContainer.append(dayTop, dayBottom);

        forecastContainer.appendChild(dayContainer);
    });
}