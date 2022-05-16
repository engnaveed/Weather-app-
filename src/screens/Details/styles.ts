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
    paddingLeft: normalize(20),
    paddingRight: normalize(30),
    paddingTop: normalize(70),
  },
  locationTitle: {
    fontSize: normalize(24),
  },
  locationSubTitle: {
    fontSize: normalize(13),
    color: COLORS.TRANSLUCEBT,
  },
  middleWrapper: {
    paddingTop: normalize(50),
    paddingHorizontal: normalize(30),
  },
  detailsTitle: {
    fontSize: normalize(12),
    color: COLORS.TRANSLUCEBT,
    marginTop: normalize(25),
  },
  detailsText: {
    fontSize: normalize(16),
    marginTop: normalize(5),
  },
});

export default styles;
