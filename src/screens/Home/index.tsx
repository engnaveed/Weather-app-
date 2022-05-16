import styles from "./styles";
import { COLORS } from "../../theme";
import React, { useContext } from "react";
import { WeatherContext } from "../../App";
import { useTheme } from "../../components/context";
import mSecToTime from "../../components/mSecToTime";
import Feather from "react-native-vector-icons/Feather";
import { todayDate } from "../../components/dateFormator";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

Feather.loadFont();
EvilIcons.loadFont();
AntDesign.loadFont();
MaterialCommunityIcons.loadFont();

const Home = ({ navigation }) => {
  const data = useContext(WeatherContext);
  const darkTheme = useTheme();

  return (
    <View
      style={[
        styles.container,
        darkTheme ? { backgroundColor: COLORS.TEXT_DARK } : null,
      ]}
    >
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("Location")}>
            <Text
              style={[
                styles.locationTitle,
                darkTheme ? { color: COLORS.TEXT_WHITE } : null,
              ]}
            >
              {data.name}
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

      <View style={styles.middleSectionWrapper}>
        <Text
          style={[
            styles.inSyncText,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          in Sync
        </Text>
        <Text
          style={[
            styles.timeDate,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          {todayDate()}
        </Text>
        <View style={styles.celsuis}>
          <Text
            style={[
              styles.celsuisText,
              darkTheme ? { color: COLORS.TEXT_WHITE } : null,
            ]}
          >
            {parseInt(data.main.temp - 273.2 + "")}
          </Text>
          <MaterialCommunityIcons
            name="temperature-celsius"
            size={40}
            color={darkTheme ? COLORS.TEXT_WHITE : null}
          />
        </View>

        <View style={styles.celsuisFluctuatinWrapper}>
          <View style={styles.celsuisFluctuatLeft}>
            <AntDesign
              name="arrowdown"
              size={15}
              color={darkTheme ? COLORS.TEXT_WHITE : null}
            />
            <Text
              style={[
                styles.celsuisTempText,
                darkTheme ? { color: COLORS.TEXT_WHITE } : null,
              ]}
            >
              {parseInt(data.main.temp_min - 273.2 + "")}
            </Text>
            <MaterialCommunityIcons
              name="temperature-celsius"
              size={15}
              color={darkTheme ? COLORS.TEXT_WHITE : null}
            />
          </View>
          <View style={styles.celsuisFluctuatRight}>
            <AntDesign
              name="arrowup"
              size={16}
              color={darkTheme ? COLORS.TEXT_WHITE : null}
            />
            <Text
              style={[
                styles.celsuisTempText,
                darkTheme ? { color: COLORS.TEXT_WHITE } : null,
              ]}
            >
              {parseInt(data.main.temp_max - 273.2 + "")}
            </Text>
            <MaterialCommunityIcons
              name="temperature-celsius"
              size={15}
              color={darkTheme ? COLORS.TEXT_WHITE : null}
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          {data.weather[0].main == "Haze" ? (
            <Feather
              style={styles.icon}
              name="sun"
              size={120}
              color={darkTheme ? COLORS.TEXT_WHITE : null}
            />
          ) : (
            <Feather
              style={styles.icon}
              name="cloud-snow"
              size={120}
              color={darkTheme ? COLORS.TEXT_WHITE : null}
            />
          )}
        </TouchableOpacity>

        <Text
          style={[
            styles.iconText,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          {data.weather[0].description}
        </Text>

        <View style={styles.sunRiseandSetTextWrapper}>
          <View style={styles.sunRiseAndSet}>
            <Feather
              name="sunrise"
              size={20}
              color={darkTheme ? COLORS.TEXT_WHITE : null}
            />
            <Text
              style={[
                styles.sunRiseSetText,
                darkTheme ? { color: COLORS.TEXT_WHITE } : null,
              ]}
            >
              {mSecToTime(1651244218334)} AM
            </Text>
          </View>
          <View style={styles.sunRiseAndSet}>
            <Feather
              name="sunset"
              size={20}
              color={darkTheme ? COLORS.TEXT_WHITE : null}
            />
            <Text
              style={[
                styles.sunRiseSetText,
                darkTheme ? { color: COLORS.TEXT_WHITE } : null,
              ]}
            >
              {mSecToTime(data.sys.sunset)} PM
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
