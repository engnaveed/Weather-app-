import { Dimensions, PixelRatio, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const normalize = (
  size: number,
  based: "height" | "width" = "width"
): number => {
  const wscale: number = width / 375;
  const hscale: number = height / 667;
  const newSize = based === "height" ? size * hscale : size * wscale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default normalize;
