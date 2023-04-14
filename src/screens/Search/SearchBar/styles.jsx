import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

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
    backgroundColor: "white",
    width: horizontalScale(335),
    height: verticalScale(50),
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 10, // no idea abt the inner shadow
  },
  insetShadow: {
    // shadowRadius: 50,
    // shadowOpacity: 0.75,
    // shadowOffset: 0,
    // color: "black",
  },
  searchIcon: {
    left: horizontalScale(25),
    width: horizontalScale(24),
    height: verticalScale(24),
  },
  searchBarText: {
    left: horizontalScale(36),
    fontSize: fontPercentage(16),
    color: "#504545",
    opacity: 0.65,
    fontFamily: "BalooBhaijaan2-Bold",
  },
});

export default styles;
