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
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
  },
  profilePicture: {
    width: horizontalScale(125),
    aspectRatio: 1,
    borderRadius: horizontalScale(125) / 2,
    resizeMode: "cover",
    marginBottom: verticalScale(10),
  },
  username: {
    fontSize: fontPercentage(33),
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#4E3535",
    lineHeight: verticalScale(50),
    marginBottom: verticalScale(-10),
  },
  role: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontWeight: "bold",
    fontSize: fontPercentage(20),
    color: "#504545CC",
    lineHeight: verticalScale(20),
  },
});

export default styles;
