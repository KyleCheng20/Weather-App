import {
    clearDayBg,
    clearNightBg,
    partlyCloudyDayBg,
    partlyCloudyNightBg,
    cloudyBg,
    showersDayBg,
    showersNightBg,
    snowShowersDayBg,
    snowShowersNightBg,
    thunderShowersDayBg,
    thunderShowersNightBg,
    windBg,
    fogBg
} from "./weatherBackgrounds";

import {
    clearDay, 
    clearNight,
    partlyCloudyDay,
    partlyCloudyNight,
    cloudy,
    fog,
    rain,
    snow,
    thunderstorm,
    wind
} from "./weatherIcons";

export const weatherAssets = {
    "clear-day": {
        bg: clearDayBg,
        icon: clearDay
    },
    "clear-night": {
        bg: clearNightBg,
        icon: clearNight
    },
    "partly-cloudy-day": {
        bg: partlyCloudyDayBg,
        icon: partlyCloudyDay
    },

    "partly-cloudy-night": {
        bg: partlyCloudyNightBg,
        icon: partlyCloudyNight
    },
    "cloudy": {
        bg: cloudyBg,
        icon: cloudy
    },
    "rain": {
        bg: showersDayBg,
        icon: rain
    },
    "showers-day": {
        bg: showersDayBg,
        icon: rain
    },
    "showers-night": {
        bg: showersNightBg,
        icon: rain
    },
    "snow": {
        bg: snowShowersDayBg,
        icon: snow
    },
    "snow-showers-day": {
        bg: snowShowersDayBg,
        icon: snow
    },
    "snow-showers-night": {
        bg: snowShowersNightBg,
        icon: snow
    },
    "thunder-rain": {
        bg: thunderShowersDayBg,
        icon: thunderstorm
    },
    "thunder-showers-day": {
        bg: thunderShowersDayBg,
        icon: thunderstorm
    },
    "thunder-showers-night": {
        bg: thunderShowersNightBg,
        icon: thunderstorm
    },
    "fog": {
        bg: fogBg,
        icon: fog
    },
    "wind": {
        bg: windBg,
        icon: wind
    }
};