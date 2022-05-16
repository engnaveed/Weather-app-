import React from "react";
import styles from "./styles";
import { COLORS } from "../../theme";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useTheme, useThemeUpdate } from "../../components/context";

EvilIcons.loadFont();

const Details = ({ navigation }) => {
  const darkTheme = useTheme();
  const { toggleIntoDarkTheme, toggleIntoLightTheme } = useThemeUpdate();

  return (
    <View
      style={[
        styles.container,
        darkTheme ? { backgroundColor: COLORS.TEXT_DARK } : null,
      ]}
    >
      <SafeAreaView>
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={() => navigation.goBack()}
        >
          <EvilIcons
            name="chevron-left"
            size={20}
            color={darkTheme ? COLORS.TEXT_WHITE : null}
          />
          <Text style={styles.headerText}>Settings</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.middleWrapper}>
        <Text
          style={[
            styles.title,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          Theme
        </Text>
        <TouchableOpacity onPress={() => toggleIntoDarkTheme()}>
          <Text style={styles.detailsTitle}> Dark Theme </Text>
          <Text style={styles.detailsText}> Join the Dark Side! </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleIntoLightTheme()}>
          <Text style={styles.detailsTitle}> Light Theme </Text>
          <Text style={styles.detailsText}> Let There be Light! </Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.title,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          {" "}
          Feedback{" "}
        </Text>
        <Text style={styles.detailsTitle}> Dark Theme </Text>
        <Text style={styles.detailsText}> Join the Dark Side! </Text>
        <Text style={styles.detailsTitle}> Light Theme </Text>
        <Text style={styles.detailsText}> Let There be Light! </Text>
        <Text
          style={[
            styles.title,
            darkTheme ? { color: COLORS.TEXT_WHITE } : null,
          ]}
        >
          {" "}
          About{" "}
        </Text>
        <Text style={styles.detailsTitle}> About Weather </Text>
        <Text style={styles.detailsText}> Read a bit more about app. </Text>
        <Text style={styles.detailsTitle}> The Team </Text>
        <Text style={styles.detailsText}>
          {" "}
          Get to know the team that made Weather a reality{" "}
        </Text>
      </View>
    </View>
  );
};

export default Details;
