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

    let currentUnit = localStorage.getItem("unit") || "F";
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

    function toggleActiveUnit(unit){
        fahrenheitBtn.classList.toggle("active", unit === "F");
        celsiusBtn.classList.toggle("active", unit === "C");
    }

    closeBtn.addEventListener("click", () => {
        statusDialog.close();
    });

    fahrenheitBtn.addEventListener("click", () => {
        currentUnit = "F";
        localStorage.setItem("unit", "F");
        toggleActiveUnit(currentUnit);
        renderWeather(weatherData, currentUnit);
    });

    celsiusBtn.addEventListener("click", () => {
        currentUnit = "C";
        localStorage.setItem("unit", "C");
        toggleActiveUnit(currentUnit);
        renderWeather(weatherData, currentUnit);
    });

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const location = searchInput.value.trim();
        if(!location) return;

        loadWeather(location);
        searchForm.reset();
    });

    toggleActiveUnit(currentUnit);
    loadWeather("Philadelphia");
}