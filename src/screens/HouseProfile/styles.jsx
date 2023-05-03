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
    fontFamily: "BalooBhaijaan2-ExtraBold",
  },
  backButtonContainer: {
    height: horizontalScale(55),
    width: "100%",
  },
  backButton: {
    width: verticalScale(30),
    height: horizontalScale(30),
    left: horizontalScale(45),
    top: verticalScale(18.32),
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  contentsContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 'bold',
    fontFamily: "BalooBhaijaan2-Medium",
    fontSize: fontPercentage(33),
    backgroundColor: '#F5F4F3',
  },
  houseName: {
  position: "absolute",
  left: 34.93,
  right: 34.67,
  top: 205,
  bottom: 20.77,

  fontFamily: "BalooBhaijaan2-ExtraBold",
  fontWeight: 400,
  fontSize: fontPercentage(27),
  lineHeight: 45,
  textAlign: "center",
  letterSpacing: -0.3,
  color: '#4E3535',
  },
  points: {
    top: 50,
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontWeight: 400,
    fontSize: 50,
    textAlign: "center",
    letterSpacing: 1,
    color: "black",
  },
  crest: {
    position: "absolute",
    width: 200,
    height: 200,
    left: 108,
    top: 15,
  },
  labels: {
    top: 36,
    fontFamily: "BalooBhaijaan2-Medium",
    fontWeight: 450,
    fontSize: 18,
    lineHeight: 24,
    position: "left",
  },
  members: {
    top: 40,
    fontFamily: "BalooBhaijaan2-Medium",
    fontSize: 16,
    lineHeight: 21,
    position: "left",
  }
});

export default styles;
