import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function Searchbox({ updateInfo }) {
  const apiUrl='http://api.weatherapi.com/v1/current.json';
  const apiKey='cc9a2ca7728646d4bea90421251110';
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let getWeatherInfo = async () => {
    try {
      let data = await fetch(`${apiUrl}?key=${apiKey}&q=${city}&aqi=no`);
      let jsonData = await data.json();
      let result = {
        temp: jsonData.current.temp_c,
        feelsLike: jsonData.current.feelslike_c,
        humidity: jsonData.current.humidity,
        city: jsonData.location.name,
        region: jsonData.location.region,
        country: jsonData.location.country,
        weather_Condition: jsonData.current.condition.text,
      };
      updateInfo(result);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError(true);
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
  };
  return (
    <div style={{marginBottom: "15px"}}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="City"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={getWeatherInfo}
        >
          Search
        </Button>
      </form>
      {error && <p style={{color:"red"}}>No such place found in our API</p>}
    </div>
  );
}
