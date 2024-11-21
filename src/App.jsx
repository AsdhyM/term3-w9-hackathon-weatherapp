import './App.css'
import { useThemeContext } from './contexts/ThemeContextProvider';
import { WeatherForm } from './components/WeatherForm';


function App() {
  
  const [currentTheme, toggleTheme, setToSystem] = useThemeContext();

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setWeatherData(response);
      console.log(result);
    } catch (error) {
      console.error("Error fetching Weather Data: ", error);
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
    setZipcode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <>
      <div className="App">
        <h1>Weather App</h1>
          <button onClick={toggleTheme}>
            Toggle theme
          </button>
          <button onClick={setToSystem}>
            Set to system theme
          </button>

          <WeatherForm />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Location:
                <input
                  type="text"
                  placeholder="Enter city"
                  value={location}
                  onChange={handleInputChange}
                  required
                />
            </label>
            <button type="submit">Get Weather</button>
          </div>
        </form>
        {weatherData ? (
          <>
            <h2>${location.name}, ${location.country}</h2>
            <p>${temperature}&deg;C.</p>
            <img>${weather_icons}</img>
            <p>${humidity}%</p>
            <p>${feelslike}&deg;C.</p>
            <p>${uv_index}</p>
            <p>${wind_speed}m/s</p>
          </>
          ) : (
            <p>Loading data</p>
        )}
      </div>
    </>
  );
}

export default App
