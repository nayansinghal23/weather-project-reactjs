import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import axios from "axios";
import { Alert, AlertTitle } from "@mui/material";

const Header = ({
  setCity,
  city,
  setTemperature,
  setHumidity,
  setText,
  setWindSpeed,
  setIcon,
  setCityFound,
}) => {
  const fetchData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b1bdec5c58a3e47f1c37bd3f1f493df0`;

    try {
      const response = await axios.get(url);
      setTemperature(response.data.main.temp);
      setWindSpeed(response.data.wind.speed);
      setHumidity(response.data.main.humidity);
      setIcon(response.data.weather[0].icon);
      setText(city);
      setCityFound(true);
    } catch (error) {
      setText(error.response.data.message);
      setCityFound(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const displayWeather = () => {
    fetchData();
  };
  return (
    <Box sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        autoComplete="off"
        type="text"
        placeholder="Enter City Name"
        sx={{
          marginRight: { sm: "20px", xs: "10px" },
          width: { sm: "250px", xs: "150px" },
          backgroundColor: "#68BBE3",
          borderRadius: "5px",
        }}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => {
          e.key === "Enter" && displayWeather();
        }}
      />
      <SearchIcon sx={{ mt: "10px" }} onClick={displayWeather} />
    </Box>
  );
};

export default Header;
