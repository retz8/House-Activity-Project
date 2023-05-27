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
  testContainer: {
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    backgroundColor: "#FAF9F8",
  },
  houseContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    borderWidth: 0.5,
    width: 77.5,
    margin: 5,
  },
  contents: {
    position: "absolute",
    zIndex: 50,
    top: -60,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },
  buttonCrestStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 130,
  },
  scoreReporterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 23,
  },
  houseNameText: {
    fontFamily: "Baloo Bhaijaan",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 23,
    color: "#4E3535",
  },
  scoreText: {
    fontFamily: "Baloo Bhaijaan",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 30,
    color: "#FFFFFF",
  },
  crown: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: "transparent",
    borderRightWidth: 20,
    borderRightColor: "transparent",
    borderTopWidth: 40,
    borderTopColor: "orange",
    borderRadius: 20,
  },
});

export default styles;
