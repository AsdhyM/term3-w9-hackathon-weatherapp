import { createContext, useContext, useState } from "react";


export const WeatherInfoContext = createContext(null);

export function useWeatherInfoContext(){
    return useContext(WeatherInfoContext);
}

export function WeatherInfoProvider({children}){
    let [weatherData, setWeatherData] = useState(null);


    // Access auth data from Weather Provider to make fetch requests
    async function fetchWeather(location, forecast) {
        const endpoint = forecast ? "forecast" : "current";
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `http:api.weatherstack.com/${endpoint}? access_key=${apiKey}&query=${location}`;

        try {
            const result = await fetch(url);
            const data = result.data;

            if (data.error) {
                console.error("Error fetching weather data: ", data.error.info);
            } else {
                setWeatherData(data.current || data.forecast);
            } 
        } catch (error) {
            console.error("Error fetching weather data: ", error);
        }
    }

    return (
        <WeatherInfoContext.Provider value={weatherData}>
            {children}
        </WeatherInfoContext.Provider>
    )
}