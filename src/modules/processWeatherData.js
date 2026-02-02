export function processWeatherData(data) {
  const today = data.days[0];

  // Get forecast for the next 7 days
  const forecast = data.days.slice(1, 8).map((day) => {
    return {
      conditions: day.conditions,
      date: day.datetime,
      feelsLike: day.feelslike,
      humidity: day.humidity,
      icon: day.icon,
      temp: day.temp,
      high: day.tempmax,
      low: day.tempmin,
      uvIndex: day.uvindex,
      visibility: day.visibility,
      wind: {
        direction: day.winddir,
        gust: day.windgust,
        speed: day.windspeed,
      },
    };
  });

  const weatherData = {
    location: data.address,

    current: {
      conditions: data.currentConditions.conditions,
      description: data.description,
      time: data.currentConditions.datetime,
      feelsLike: data.currentConditions.feelslike,
      humidity: data.currentConditions.humidity,
      icon: data.currentConditions.icon,
      temp: data.currentConditions.temp,
      uvIndex: data.currentConditions.uvindex,
      visibility: data.currentConditions.visibility,
      wind: {
        direction: data.currentConditions.winddir,
        gust: data.currentConditions.windgust,
        speed: data.currentConditions.windspeed,
      },
    },

    today: {
      date: today.datetime,
      high: today.tempmax,
      low: today.tempmin,
    },

    forecast,
  };

  console.log(weatherData);
  return weatherData;
}
