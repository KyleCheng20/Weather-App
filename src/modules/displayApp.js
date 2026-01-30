import { getWeatherData } from "./getWeatherData";
import { processWeatherData } from "./processWeatherData";
import { renderWeather } from "./renderWeather";

const API_KEY = "8V8B5T4ADFQXMCR6T35AH89ZZ";

export function displayApp(){
    const fahrenheitBtn = document.querySelector(".fahrenheit-btn");
    const celsiusBtn = document.querySelector(".celsius-btn");
    const searchForm = document.querySelector(".search-location");
    const searchInput = document.querySelector("#search");
    const statusDialog = document.querySelector(".status-popup");
    const statusMsg = document.querySelector(".status-msg");
    const closeBtn = document.querySelector(".close-btn");

    let currentUnit = "F";
    let weatherData = null;

    async function loadWeather(location){
        try {
            const data = await getWeatherData(location, API_KEY);
            weatherData = processWeatherData(data);
            renderWeather(weatherData, currentUnit);
        } catch (error) {
            statusDialog.showModal();
            statusMsg.textContent = "City not found or network error.";
            console.log(error);
        }
    }

    closeBtn.addEventListener("click", () => {
        statusDialog.close();
    });

    fahrenheitBtn.addEventListener("click", () => {
        currentUnit = "F";
        renderWeather(weatherData, currentUnit);
    });

    celsiusBtn.addEventListener("click", () => {
        currentUnit = "C";
        renderWeather(weatherData, currentUnit);
    });

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const location = searchInput.value.trim();
        if(!location) return;

        loadWeather(location);
        searchForm.reset();
    });

    loadWeather("Philadelphia");
}