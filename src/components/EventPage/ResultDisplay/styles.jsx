import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  eventLabel: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(18),
    color: "#504545",
    opacity: 0.65,
    paddingRight: horizontalScale(10),
  },

  waitingText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(15),
    color: "#504545",
    opacity: 0.5,
  },

  houseResult: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: horizontalScale(5),
  },
  circle: {
    width: horizontalScale(15),
    height: verticalScale(15),
    borderRadius: verticalScale(15 / 2),
  },
  point: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(16),
    color: "#4E3535",
    paddingLeft: horizontalScale(5),
  },
});

export default styles;
