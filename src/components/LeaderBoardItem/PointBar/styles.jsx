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
    width: horizontalScale(77.5),
    borderTopLeftRadius: horizontalScale(10),
    borderTopRightRadius: horizontalScale(10),
  },
  smallContainer: {
    width: horizontalScale(70),
    borderTopLeftRadius: horizontalScale(10),
    borderTopRightRadius: horizontalScale(10),
  },
  contents: {
    flex: 1,
    alignItems: "center",
  },

  pointBarContents: {
    position: "absolute",
    top: verticalScale(-50),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  crestImage: {
    height: verticalScale(110),
    width: horizontalScale(110),
    resizeMode: "contain",
  },
  smallCrestImage: {
    height: verticalScale(90),
    width: horizontalScale(90),
    resizeMode: "contain",
  },
  crown: {
    position: "absolute",
    top: verticalScale(-25),
    height: verticalScale(30),
    width: horizontalScale(30),
  },

  scoreReporterContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  houseNameText: {
    alignSelf: "center",
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(15),
    paddingBottom: verticalScale(5),
    color: "#4E3535",
  },
  smallHouseNameText: {
    alignSelf: "center",
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(13),
    paddingBottom: verticalScale(3),
    color: "#4E3535",
  },
  scoreText: {
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(20),
    lineHeight: verticalScale(30),
    color: "#FFFFFF",
  },
  smallScoreText: {
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(16),
    lineHeight: verticalScale(20),
    color: "#FFFFFF",
  },
});

export default styles;
