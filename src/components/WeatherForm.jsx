// import { useEffect, useState } from "react";
import "../styles/style.css";

export function WeatherForm(){
    const weatherContainer = document.getElementById('weather');
}


export async function getWeather() {
    try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`http:api.weatherstack.com/current? access_key=${apiKey}&query=New York`);
        
        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        console.error("Error fetching Weather Data: ", error);
    }
}

export function displayWeather(data){
    if (data.error) {
        console.error("Error fetching Weather Data: ", data.error.info);
    } else {
        const {temperature, weather_icons, humidity, feelslike, uv_index, wind_speed} = data.current;
    
        // const { location } = data.current;
        //     weatherContainer.innerHTML =
    
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label>
        //                 Location:
        //                 <input
        //                     type="text"
        //                     placeholder="Enter city"
        //                     value={location}
        //                     onChange={handleInputChange}
        //                     required
        //                 />
        //             </label>
        //             <button type="submit">Get Weather</button>
        //         </div>
        //     </form>
        //     {weatherData ? (
    //             <>
    //                 <h2>${location.name}, ${location.country}</h2>
    //                 <p>${temperature}&deg;C.</p>
    //                 <img>${weather_icons}</img>
    //                 <p>${humidity}%</p>
    //                 <p>${feelslike}&deg;C.</p>
    //                 <p>${uv_index}</p>
    //                 <p>${wind_speed}m/s</p>
    //             </>
    // }
    }

}
getWeather();

        //     ) : (
        //         <p>Loading data</p>
        //     )}
        // </div>
    


// export function WeatherForm ({ onSubmit }) {
//     const [city, setCity] = useState('');
//     const [zipcode, setZipcode] = useState('');
//     const [weatherData, setWeatherData] = useState(null);

//     const location = city ? "city" : "zipcode";
//     const apiKey = import.meta.env.VITE_API_KEY;
//     const url = (`http:api.weatherstack.com/current
//         ? access_key=${apiKey}
//         & query=${location}`);

//     const options = {
//         method: 'GET'
//     };
    

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.text();
    //         setWeatherData(response);
    //         console.log(result);
    //     } catch (error) {
    //         console.error("Error fetching Weather Data: ", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const handleInputChange = (event) => {
    //     setCity(event.target.value);
    //     setZipcode(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetchData();
    // };


    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label>
    //                     Location:
    //                     <input
    //                         type="text"
    //                         placeholder="Enter city"
    //                         value={location}
    //                         onChange={handleInputChange}
    //                         required
    //                     />
    //                 </label>
    //                 <button type="submit">Get Weather</button>
    //             </div>
    //         </form>
    //         {weatherData ? (
    //             <>
    //                 <h2>{weatherData.name}</h2>
    //                 <p>Temperature: {weatherData.main.temp}&deg;C.</p>
    //                 <img>{weatherData.main.weather_icons}</img>
    //                 <p>Humidity: {weatherData.main.humidity}%</p>
    //                 <p>Feels like: {weatherData.main.feelslike}&deg;C.</p>
    //                 <p>UV: {weatherData.main.uv_index}</p>
    //                 <p>Wind speed: {weatherData.wind_speed}m/s</p>
    //             </>
    //         ) : (
    //             <p>Loading data</p>
    //         )}
    //     </div>
    // );





