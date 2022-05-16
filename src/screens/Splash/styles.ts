import { StyleSheet } from "react-native";
import { normalize } from "../../utils";
import { COLORS } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "stretch",
  },
  title: {
    alignSelf: "center",
    fontSize: normalize(40),
    color: COLORS.TEXT_DARK,
  },
  subTitle: {
    alignSelf: "center",
    color: COLORS.TEXT_DARK,
  },
});

export default styles;
