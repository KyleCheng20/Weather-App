import "./style.css";
import { getWeatherData } from "./modules/getWeatherData";

const API_KEY = "8V8B5T4ADFQXMCR6T35AH89ZZ";

getWeatherData("philadelphia", API_KEY);