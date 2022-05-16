import { COLORS } from "../../theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APP_BACKGROUND,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 30,
    paddingTop: 70,
  },
  locationTitle: {
    fontSize: 24,
  },
  locationSubTitle: {
    fontSize: 13,
    color: COLORS.TRANSLUCEBT,
  },
  middleWrapper: {
    paddingTop: 50,
  },
  hourlyForecast: {
    marginTop: 50,
    paddingHorizontal: 25,
    color: COLORS.TRANSLUCEBT,
  },
  dailyForecast: {
    paddingTop: 55,
    paddingHorizontal: 25,
    color: COLORS.TRANSLUCEBT,
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 30,
  },
  flatlistWrapper: {
    paddingLeft: 30,
    marginTop: 20,
    alignItems: "center",
  },
  time: {
    fontSize: 10,
  },
  icon: {
    paddingTop: 11,
  },
  celsuisFluctuatinWrapper: {
    marginTop: 11,
    flexDirection: "row",
    alignItems: "baseline",
  },
  celsuisText: {
    fontSize: 11,
    marginLeft: 8,
  },
});

export default styles;
