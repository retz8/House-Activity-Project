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
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    top: verticalScale(171.5),
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(30),
  },
  appNameText: {
    top: verticalScale(171.5),
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(30),
    color: "#5D0E23",
  },
  descContainer: {
    top: verticalScale(196),
    flexDirection: "row",
  },
  descText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(21),
  },
  schoolNameText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(21),
    color: "#5D0E23",
  },
  imageButton: {
    top: verticalScale(228),
    width: horizontalScale(275),
    height: verticalScale(50),
    resizeMode: "contain",
  },
});

export default styles;
