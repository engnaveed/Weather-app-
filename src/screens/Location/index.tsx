import { COLORS } from "../../theme";
import styles from "./styles";
import React, { useContext } from "react";
import { WeatherContext } from "../../App";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useTheme } from "../../components/context";

EvilIcons.loadFont();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Location = ({ navigation }) => {
  const {
    name,
    main: { temp },
    weather,
  } = useContext(WeatherContext);
  const darkTheme = useTheme();
  const data = [
    {
      name,
      temp,
      weather,
    },
  ];

  const weatherInfo = ({ item }) => {
    return (
      <View style={styles.flatlistWrapper}>
        <View>
          <Text
            style={[
              styles.cityName,
              darkTheme ? { color: COLORS.TEXT_WHITE } : null,
            ]}
          >
            {item.name}
          </Text>
          <View style={styles.tempWrapper}>
            <Text
              style={[
                styles.celsius,
                darkTheme ? { color: COLORS.TEXT_WHITE } : null,
              ]}
            >
              {parseInt(item.temp - 273.2 + "")}
            </Text>
            <MaterialCommunityIcons
              name="temperature-celsius"
              size={15}
              color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TRANSLUCEBT}
            />
          </View>
          <Text style={styles.weatherDes}>{item.weather[0].description}</Text>
        </View>
        {item.weather[0].description == "haze" ? (
          <Feather
            name="sun"
            size={25}
            color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TEXT_DARK}
          />
        ) : (
          <Feather
            name="cloud-snow"
            size={25}
            color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TEXT_DARK}
          />
        )}
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
          <TouchableOpacity
            style={styles.leftHeaderWrapper}
            onPress={() => navigation.goBack()}
          >
            <EvilIcons
              name="chevron-left"
              size={20}
              color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TEXT_DARK}
            />
            <Text
              style={[
                styles.headerText,
                darkTheme
                  ? { color: COLORS.TEXT_WHITE }
                  : { color: COLORS.TEXT_DARK },
              ]}
            >
              Select City
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="plus"
              size={20}
              color={darkTheme ? COLORS.TEXT_WHITE : COLORS.TEXT_DARK}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <FlatList
        data={data}
        renderItem={weatherInfo}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default Location;
