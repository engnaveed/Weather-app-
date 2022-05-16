import { COLORS } from "../../theme";
import { normalize } from "../../utils";
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
    paddingHorizontal: normalize(30),
    paddingTop: normalize(70),
  },
  locationTitle: {
    fontSize: normalize(24),
  },
  locationSubTitle: {
    fontSize: normalize(13),
    color: COLORS.TRANSLUCEBT,
  },
  middleSectionWrapper: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: normalize(50),
  },
  inSyncText: {
    fontSize: normalize(10),
  },
  timeDate: {
    fontSize: normalize(18),
    paddingTop: normalize(30),
  },
  celsuis: {
    paddingTop: normalize(20),
    flexDirection: "row",
    alignItems: "baseline",
  },
  celsuisText: {
    fontSize: normalize(86),
  },
  celsuisFluctuatinWrapper: {
    marginTop: normalize(20),
    flexDirection: "row",
  },
  celsuisFluctuatLeft: {
    flexDirection: "row",
    marginRight: normalize(25),
    alignItems: "baseline",
  },
  celsuisFluctuatRight: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  celsuisTempText: {
    fontSize: normalize(18),
    marginLeft: normalize(8),
  },
  icon: {
    paddingTop: normalize(55),
  },
  iconText: {
    fontSize: normalize(18),
    paddingTop: normalize(25),
  },
  sunRiseandSetTextWrapper: {
    flexDirection: "row",
    paddingTop: normalize(50),
  },
  sunRiseAndSet: {
    flexDirection: "row",
    marginLeft: normalize(14),
  },
  sunRiseSetText: {
    fontSize: normalize(17),
    marginLeft: normalize(9),
  },
});

export default styles;
