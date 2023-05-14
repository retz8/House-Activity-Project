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
    borderColor: "green",
    borderWidth: 1,
  },

  username: {
    top: verticalScale(175),
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(33),
    color: "#4E3535",
  },
});

export default styles;
