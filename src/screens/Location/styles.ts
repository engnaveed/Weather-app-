import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";
import { normalize } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: normalize(30),
    paddingTop: normalize(70),
  },
  leftHeaderWrapper: {
    flexDirection: "row",
  },
  headerText: {
    fontSize: normalize(13),
  },
  flatlistWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: normalize(30),
    marginTop: normalize(50),
    alignItems: "center",
  },
  cityName: {
    fontSize: normalize(16),
  },
  celsius: {
    color: COLORS.TRANSLUCEBT,
  },
  tempWrapper: {
    flexDirection: "row",
    color: COLORS.TEXT_DARK,
    alignItems: "baseline",
  },
  weatherDes: {
    color: COLORS.TRANSLUCEBT,
  },
});

export default styles;
