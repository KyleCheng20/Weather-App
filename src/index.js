import "./style.css";
import { getWeatherData } from "./modules/getWeatherData";
import { processWeatherData } from "./modules/processWeatherData";
import { renderWeather } from "./modules/renderWeather";

const fahrenheitBtn = document.querySelector(".fahrenheit-btn");
const celsiusBtn = document.querySelector(".celsius-btn");

const API_KEY = "8V8B5T4ADFQXMCR6T35AH89ZZ";

let currentUnit = "F";

function setCurrentUnit(unit){
    currentUnit = unit;
}

fahrenheitBtn.addEventListener("click", () => {
    setCurrentUnit("F");
    renderWeather(weatherData, currentUnit);
});

celsiusBtn.addEventListener("click", () => {
    setCurrentUnit("C");
    renderWeather(weatherData, currentUnit);
});

const data = await getWeatherData("Philadelphia", API_KEY);

const weatherData = processWeatherData(data);

renderWeather(weatherData, currentUnit);
