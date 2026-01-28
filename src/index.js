import "./style.css";
import { getWeatherData } from "./modules/getWeatherData";
import { processWeatherData } from "./modules/processWeatherData";
import { renderWeather } from "./modules/renderWeather";

const API_KEY = "8V8B5T4ADFQXMCR6T35AH89ZZ";

const data = await getWeatherData("Philadelphia", API_KEY);

const weatherData = processWeatherData(data);

renderWeather(weatherData);
