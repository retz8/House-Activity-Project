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
  },
  backButtonContainer: {
    height: verticalScale(55),
    width: "100%",
  },
  backButton: {
    width: horizontalScale(40),
    height: verticalScale(40),
    left: horizontalScale(25),
    top: verticalScale(15),
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  contentsContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F4F3",
  },

  baseHouseInfo: {
    height: verticalScale(250),
    width: "100%",
  },

  houseUsers: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
