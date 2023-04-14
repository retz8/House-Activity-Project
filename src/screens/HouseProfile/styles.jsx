import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../helpers/responsiveSize";

/*
WHEN YOU ARE USING WIDTH / HEIGHT / FONTSIZE
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
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "BalooBhaijaan2-Medium",
  },
  backButtonContainer: {
    height: horizontalScale(55),
    width: "100%",
    fontFamily: "BalooBhaijaan2-Medium",
  },
  backButton: {
    width: verticalScale(30),
    height: horizontalScale(30),
    left: horizontalScale(45),
    top: verticalScale(18.32),
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "BalooBhaijaan2-Medium",
  },
  contentsContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "green",
    borderWidth: 1,
    fontFamily: "BalooBhaijaan2-Medium",
  },
});

export default styles;
