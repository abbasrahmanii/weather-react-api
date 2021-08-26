import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCity,
  faFlag,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=qom&aqi=no`
      )
      .then((data) => {
        setWeather(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const weatherInput = (e) => {
    setInput(e.target.value);
  };
  const SearchWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}&aqi=no`
      )
      .then((data) => {
        setWeather(data.data);
        console.log(data.data);
      });
  };
  return (
    <div className="min-h-screen bg-blue-900">
      {weather && (
        <div className="container pt-8 mx-auto text-center">
          <div className="flex justify-center w-8/12 mx-auto mb-8 align-middle input">
            <input
              className="px-3 py-1"
              onChange={weatherInput}
              placeholder="City / Village"
              type="text"
            />
            <div
              className="px-3 py-1 ml-1 bg-yellow-500"
              onClick={SearchWeather}
            >
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className="container w-1/2 px-10 py-5 mx-auto bg-green-600 rounded-lg">
            <div className="flex mb-4 bg-orange-700">
              <div className="w-20 mr-5">
                <FontAwesomeIcon icon={faCity} color="#fff" size="2x" />
              </div>
              <h1 className="flex justify-center w-full bg-green-700 rounded py-auto text-yellow-50">
                {weather.location.name}
              </h1>
            </div>
            <div className="flex">
              <div className="w-20 mr-5">
                <FontAwesomeIcon icon={faFlag} color="#fff" size="2x" />
              </div>
              <h1 className="flex justify-center w-full bg-green-700 rounded py-auto text-yellow-50">
                {weather.location.country}
              </h1>
            </div>
            <div>
              <div className="grid grid-cols-2 mx-auto mt-6">
                <img
                  className="mx-auto"
                  src={weather.current.condition.icon}
                  alt=""
                />
                <FontAwesomeIcon
                  className="mx-auto my-auto"
                  icon={faTemperatureHigh}
                  size="2x"
                  color="white"
                />
              </div>
              <div className="grid grid-cols-2">
                <h3 className="text-red-100">
                  {weather.current.condition.text}
                </h3>
                <h3 className="text-red-100">
                  {weather.current.temp_c}&#8451;
                </h3>
              </div>
            </div>
            {/* <h1 className="">{weather.location.name}</h1>
            <h2>{weather.location.country}</h2>
            <h4>{weather.current.condition.text}</h4>
            <img src={weather.current.condition.icon} alt="" />
          <h4>{weather.current.temp_c}&#8451;</h4> */}
          </div>
          <div className="mt-7">
            <a
              href="http://api.weatherapi.com"
              className="p-1 transition bg-red-500 rounded-md shadow-lg hover:shadow-none hover:bg-red-600 text-yellow-50"
            >
              api.weatherapi.com
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
