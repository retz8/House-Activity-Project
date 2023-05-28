import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../helpers/responsiveSize";

export function getImageStyle(size = "medium") {
  return size === "medium"
    ? {
        borderRadius: horizontalScale(27 / 2),
        overflow: "hidden",
        width: horizontalScale(27),
        aspectRatio: 1,
      }
    : {
        borderRadius: horizontalScale(24 / 2),
        overflow: "hidden",
        width: horizontalScale(24),
        aspectRatio: 1,
      };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontFamily: "BalooBhaijaan2-Medium",
    fontSize: fontPercentage(16),
    color: "#504545",
    opacity: 0.65,
    paddingLeft: horizontalScale(5),
  },
});

export default styles;
