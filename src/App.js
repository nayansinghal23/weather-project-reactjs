import React, { useState } from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Body from "./components/Body";

function App() {
  const [city, setCity] = useState("Meerut");
  const [temperature, setTemperature] = useState(10);
  const [windSpeed, setWindSpeed] = useState(10);
  const [humidity, setHumidity] = useState(10);
  const [icon, setIcon] = useState("");
  const [text, setText] = useState(city);
  const [cityFound, setCityFound] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90vw",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.dark",
          display: "flex",
          flexDirection: "column",
          width: { sm: "450px", xs: "250px" },
          height: { sm: "450px", xs: "450px" },
          borderRadius: 2,
        }}
      >
        <Header
          city={city}
          setCity={setCity}
          setTemperature={setTemperature}
          setWindSpeed={setWindSpeed}
          setHumidity={setHumidity}
          setIcon={setIcon}
          setText={setText}
          setCityFound={setCityFound}
        />
        <Body
          temperature={temperature}
          windSpeed={windSpeed}
          humidity={humidity}
          icon={icon}
          text={text}
          cityFound={cityFound}
        />
      </Box>
    </Box>
  );
}

export default App;
