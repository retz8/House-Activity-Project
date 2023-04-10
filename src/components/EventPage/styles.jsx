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
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "green",
    borderWidth: 1,
  },
  backButtonContainer: {
    height: horizontalScale(55),
    width: "100%",
  },
  backButton: {
    width: verticalScale(30), // for responsive design, convert the size fitting into emulator
    height: horizontalScale(30), // horizontal/vertialScale(pixel size on Figma file)
    left: horizontalScale(45),
    top: verticalScale(18.32),
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
