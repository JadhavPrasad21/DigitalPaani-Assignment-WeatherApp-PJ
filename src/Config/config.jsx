// config
const OPEN_WEATHER_MAP_API_KEY = "35df7a6c3aa22b5073d57be55097bcc4";

const config = {
  WEATHER_API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_MAP_API_KEY}&`,
  WEATHER_DATA_ENDPOINT: `https://api.openweathermap.org/data/3.0/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}&exclude=minutely&units=metric&`,
  HISTORICAL_DATA_ENDPOINT: `https://api.openweathermap.org/data/3.0/onecall/timemachine?appid=${OPEN_WEATHER_MAP_API_KEY}&`,
  DAILY_AGGREGATION_ENDPOINT: `https://api.openweathermap.org/data/3.0/onecall/day_summary?appid=${OPEN_WEATHER_MAP_API_KEY}&`,
};

export default config;
