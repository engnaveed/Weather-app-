import React, { useContext } from "react";
import { COLORS } from "../../theme";
import styles from "./styles";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  WeatherContext,
  WeatherContextDaily,
  WeatherContextHourly,
} from "../../App";
import { useTheme } from "../../components/context";
import { dateFormater } from "../../components/dateFormator";

Feather.loadFont();
AntDesign.loadFont();
EvilIcons.loadFont();
MaterialCommunityIcons.loadFont();

const Forecast = ({ navigation }) => {
  const dailyForecastData = useContext(WeatherContextDaily);
  const hourlyForecastData = useContext(WeatherContextHourly);
  const darkTheme = useTheme();
  const { name } = useContext(WeatherContext);

  const hourlyReport = ({ item }) => {
    return item.timepoint <= 24 ? (
      <View style={[styles.flatlistWrapper]}>
        <Text
          style={[styles.time, darkTheme ? { color: COLORS.TEXT_WHITE } : null]}
        >
          {item.timepoint < 10 ? "0" + item.timepoint : item.timepoint}:00
        </Text>
        {item.cloudcover < 5 ? (
          <Feather
            style={styles.icon}
            name="sun"
            size={20}
            color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TRANSLUCEBT}
          />
        ) : (
          <Feather
            style={styles.icon}
            name="cloud-snow"
            size={20}
            color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TRANSLUCEBT}
          />
        )}
      </View>
    ) : null;
  };

  const dailyReport = ({ item }) => {
    return (
      <View style={styles.flatlistWrapper}>
        <Text
          style={[styles.time, darkTheme ? { color: COLORS.TEXT_WHITE } : null]}
        >
          {dateFormater(item.date)}
        </Text>
        {item.weather == "clear" ? (
          <Feather
            style={styles.icon}
            name="sun"
            size={20}
            color={darkTheme ? COLORS.TEXT_WHITE : null}
          />
        ) : (
          <Feather
            style={styles.icon}
            name="cloud-snow"
            size={20}
            color={darkTheme ? COLORS.TEXT_WHITE : null}
          />
        )}
        <View style={styles.celsuisFluctuatinWrapper}>
          <AntDesign
            name="arrowup"
            size={11}
            color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TRANSLUCEBT}
          />
          <Text
            style={[
              styles.celsuisText,
              darkTheme ? { color: COLORS.TEXT_WHITE } : null,
            ]}
          >
            {item.temp2m.max}
          </Text>
          <MaterialCommunityIcons
            name="temperature-celsius"
            size={11}
            color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TRANSLUCEBT}
          />
        </View>
        <View style={styles.celsuisFluctuatinWrapper}>
          <AntDesign
            name="arrowdown"
            size={11}
            color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TRANSLUCEBT}
          />
          <Text
            style={[
              styles.celsuisText,
              darkTheme ? { color: COLORS.TEXT_WHITE } : null,
            ]}
          >
            {item.temp2m.min}
          </Text>
          <MaterialCommunityIcons
            name="temperature-celsius"
            size={12}
            color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TRANSLUCEBT}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        darkTheme ? { backgroundColor: COLORS.TEXT_DARK } : null,
      ]}
    >
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
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
          style={[styles.text, darkTheme ? { color: COLORS.TEXT_WHITE } : null]}
        >
          Forecast
        </Text>
        <Text style={styles.hourlyForecast}> Hourle Forecast </Text>
        <FlatList
          data={hourlyForecastData}
          renderItem={hourlyReport}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.date}
        />
        <Text style={styles.dailyForecast}> Daily Forecast </Text>
        <FlatList
          data={dailyForecastData}
          renderItem={dailyReport}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.time}
        />
      </View>
    </View>
  );
};

export default Forecast;
