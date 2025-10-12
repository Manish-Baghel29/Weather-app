import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({Info}) {
    let cold_url = "https://images.unsplash.com/photo-1641672222794-536ad524a929?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
    let hot_url = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
    let rainy_url="https://media.istockphoto.com/id/547033564/photo/rain-flows-down-from-a-roof-down.webp?a=1&b=1&s=612x612&w=0&k=20&c=JjzhyKKywplhXhNiXslYVMiOhuAftqZhUN8zjMtlkzc=";
  return (
    <>
      <center>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Info.humidity > 80 ? rainy_url : Info.temp > 20 ? hot_url : cold_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city} {Info.humidity > 80 ? <ThunderstormIcon /> : Info.temp > 20 ? <SunnyIcon /> : <AcUnitIcon />}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>Temperature: {Info.temp}&deg;C</p>
            <p>Humidity: {Info.humidity}</p>
            <p>Region :{Info.region} , {Info.country}</p>
            <p>The weather condition is <b>{Info.weather_Condition}</b> and feels like {Info.feelsLike}.</p>
          </Typography>
        </CardContent>
      </Card>
      </center>
    </>
  );
}
