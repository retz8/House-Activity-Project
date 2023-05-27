import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../helpers/responsiveSize";

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
    flex: 1,
  },
  searchPageTitle: {
    top: verticalScale(13),
    left: horizontalScale(30),
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#4E3535",
    fontSize: fontPercentage(30),
  },
  noEventsText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(15),
    alignSelf: "center",
    opacity: 0.5,
  },
});

export default styles;
