import styles from "./styles";
import { COLORS } from "../../theme";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useTheme } from "../../components/context";

const SplashScreen = ({ navigation }) => {
  const darkTheme = useTheme();

  useEffect(() => {
    setTimeout(() => navigation.replace("Home"), 4000);
  });

  return (
    <View
      style={[
        styles.container,
        darkTheme ? { backgroundColor: COLORS.TEXT_DARK } : null,
      ]}
    >
      <Text
        style={[styles.title, darkTheme ? { color: COLORS.TEXT_WHITE } : null]}
      >
        Weather
      </Text>
      <Text
        style={[
          styles.subTitle,
          darkTheme ? { color: COLORS.TEXT_WHITE } : null,
        ]}
      >
        A minimal weather app
      </Text>
    </View>
  );
};

export default SplashScreen;
