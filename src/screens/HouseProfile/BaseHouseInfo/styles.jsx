import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

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
    position: "absolute",
    top: -verticalScale(15),
    flex: 1,
    width: horizontalScale(170),
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: verticalScale(170),
  },
  crest: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    alignSelf: "center",
  },

  houseName: {
    textAlign: "center",
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(30),
    lineHeight: verticalScale(45),
    color: "#4E3535",
  },
  points: {
    textAlign: "center",
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(50),
    lineHeight: verticalScale(65),
  },
});

export default styles;
