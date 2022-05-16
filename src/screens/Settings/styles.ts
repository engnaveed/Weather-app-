import { StyleSheet } from "react-native";
import { normalize } from "../../utils";
import { COLORS } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APP_BACKGROUND,
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: normalize(20),
    paddingTop: normalize(70),
  },
  headerText: {
    fontSize: normalize(18),
    color: COLORS.TRANSLUCEBT,
  },

  middleWrapper: {
    paddingHorizontal: normalize(30),
  },
  title: {
    paddingTop: normalize(50),
    fontSize: normalize(22),
  },
  detailsTitle: {
    fontSize: normalize(16),
    color: COLORS.TRANSLUCEBT,
    marginTop: normalize(20),
  },
  detailsText: {
    fontSize: normalize(9),
    marginTop: normalize(5),
    color: COLORS.TRANSLUCEBT,
  },
});

export default styles;
