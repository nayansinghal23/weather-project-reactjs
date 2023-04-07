import { Box, Typography } from "@mui/material";
import React from "react";

const Body = ({ temperature, humidity, icon, windSpeed, text, cityFound }) => {
  return cityFound ? (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={`https://openweathermap.org/img/wn/${icon ? icon : "01d"}@2x.png`}
        alt="image"
        width="200px"
        height="200px"
      />
      <Typography
        sx={{
          fontSize: "35px",
          color: "wheat",
          fontFamily: "cursive",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {temperature} ° C
        <br />
        {text}
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          color: "wheat",
          fontFamily: "cursive",
          display: "flex",
        }}
      >
        <span style={{ marginRight: "10px" }}>
          {humidity}% <br /> Humidity
        </span>
        <span style={{ marginLeft: "10px" }}>
          {windSpeed}km/h <br /> Wind
        </span>
      </Typography>
    </Box>
  ) : (
    <Typography
      sx={{
        fontSize: { sm: "50px", xs: "30px" },
        margin: "auto",
        color: "rosybrown",
        marginLeft: "20px",
        fontFamily: "cursive",
      }}
    >
      {text}
    </Typography>
  );
};

export default Body;
