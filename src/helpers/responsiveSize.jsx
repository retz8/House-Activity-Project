// import {} from "react-native";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

export function fontPercentage(size) {
  const percentage = size * 0.135; // need to change
  return responsiveScreenFontSize(percentage);
}

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
