import axios from "axios";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Settings from "./screens/Settings";
import Forecast from "./screens/Forecast";
import React, { useState, useEffect } from "react";
import Location from "./screens/Location";
import SplashScreen from "./screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./components/context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const WeatherContext = React.createContext(null);
export const WeatherContextDaily = React.createContext(null);
export const WeatherContextHourly = React.createContext(null);

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Details: undefined;
  Location: undefined;
  Forecast: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const apiKey = "f56f24967aaf51182d1d4df628297c6d";

export default function App() {
  const [openWeatherData, setOpenWeatherData] = useState({});
  const [dailyForecast, setDailyForecast] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState({});

  useEffect(() => {
    getWetherDetails();
  }, []);

  const getWetherDetails = () => {
    const city = "lahore";
    const apiURLOpen =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey;
    const apiURLDaily =
      "https://www.7timer.info/bin/api.pl?lon=74.359&lat=31.52&product=civillight&output=json";
    const apiURLHourly =
      "https://www.7timer.info/bin/api.pl?lon=74.359&lat=31.52&product=meteo&output=json";
    axios
      .get(apiURLOpen)
      .then((res) => {
        setOpenWeatherData(res.data);
      })
      .catch(() => {});
    axios
      .get(apiURLDaily)
      .then((res) => {
        setDailyForecast(res.data.dataseries);
      })
      .catch(() => {});
    axios
      .get(apiURLHourly)
      .then((res) => {
        setHourlyForecast(res.data.dataseries);
      })
      .catch(() => {});
  };

  return (
    <ThemeProvider>
      <WeatherContext.Provider value={openWeatherData}>
        <WeatherContextDaily.Provider value={dailyForecast}>
          <WeatherContextHourly.Provider value={hourlyForecast}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Splash"
                  component={SplashScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Details"
                  component={Details}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Location"
                  component={Location}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Forecast"
                  component={Forecast}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Settings"
                  component={Settings}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </WeatherContextHourly.Provider>
        </WeatherContextDaily.Provider>
      </WeatherContext.Provider>
    </ThemeProvider>
  );
}
