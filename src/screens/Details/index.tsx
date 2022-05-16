import { COLORS } from "../../theme";
import styles from "./styles";
import React, { useContext } from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useTheme } from "../../components/context";
import { WeatherContextHourly, WeatherContext } from "../../App";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

EvilIcons.loadFont();

const Details = ({ navigation }) => {
  const hourlyForecastData = useContext(WeatherContextHourly);
  const darkTheme = useTheme();
  const { name } = useContext(WeatherContext);

  return (
    <View
      style={[
        styles.container,
        darkTheme ? { backgroundColor: COLORS.TEXT_DARK } : null,
      ]}
    >
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text
              style={[
                styles.locationTitle,
                darkTheme ? { color: COLORS.TEXT_WHITE } : null,
              ]}
            >
              {name}
            </Text>
            <Text style={styles.locationSubTitle}>Current Location</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <EvilIcons
              name="gear"
              size={25}
              color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TEXT_DARK}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.middleWrapper}>
        <Text
          style={[
            styles.detailsText,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          Details
        </Text>
        <Text style={styles.detailsTitle}> Preciption </Text>
        <Text
          style={[
            styles.detailsText,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          {" "}
          {hourlyForecastData[0].prec_amount} mm{" "}
        </Text>
        <Text style={styles.detailsTitle}> SE Wind </Text>
        <Text
          style={[
            styles.detailsText,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          {" "}
          {hourlyForecastData[0].wind10m.speed} km/h{" "}
        </Text>
        <Text style={styles.detailsTitle}> Humidity </Text>
        <Text
          style={[
            styles.detailsText,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          {" "}
          56 %{" "}
        </Text>
        <Text style={styles.detailsTitle}> Visibility </Text>
        <Text
          style={[
            styles.detailsText,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          {" "}
          14.83 km{" "}
        </Text>
        <Text style={styles.detailsTitle}> UV </Text>
        <Text
          style={[
            styles.detailsText,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          {" "}
          Lowest{" "}
        </Text>
        <Text style={styles.detailsTitle}> Pressure </Text>
        <Text
          style={[
            styles.detailsText,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          {" "}
          {hourlyForecastData[0].msl_pressure} hPa{" "}
        </Text>
      </View>
      <Button
        title="Click for More Details"
        onPress={() => navigation.navigate("Forecast")}
      />
    </View>
  );
};

export default Details;
