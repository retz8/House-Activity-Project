import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../helpers/responsiveSize";
import { Platform } from "react-native";

/*
WHEN YOU ARE USING WIDHT / HEIGHT / FONTSIZE
ex) 
width: verticalScale(275), // for responsive design, convert the size fitting into emulator
height: horizontalScale(50), // horizontal/vertialScale(pixel size on Figma file)
fontSize: fontPercentage(18), // 18: 18px
*/

/*
TO USE SAME FONT IN FIGMA FILE
ex)
fontFamily: "BalooBhaijaan2-Medium",
*/

export function getImageStyle(size = "medium") {
  return size === "medium"
    ? {
        borderRadius: verticalScale(27 / 2),
        overflow: "hidden",
        width: verticalScale(27),
        height: horizontalScale(27),
      }
    : {
        borderRadius: verticalScale(24 / 2),
        overflow: "hidden",
        width: verticalScale(24),
        height: horizontalScale(24),
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
