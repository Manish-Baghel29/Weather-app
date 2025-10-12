import InfoBox from "./InfoBox";
import Searchbox from "./Searchbox";
import { useState } from "react";

export default function WeatherInfo() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Etawah",
    country: "India",
    feelsLike: 24.6,
    humidity: 45,
    region: "Uttar Pradesh",
    temp: 23,
    weather_Condition: "Clear",
  });
  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <>
        <h1>Weather app by <i style={{color:"skyblue"}}>Manish Baghel</i></h1>
      <Searchbox updateInfo={updateInfo}/>
      <InfoBox Info={weatherInfo}/>
    </>
  );
}
