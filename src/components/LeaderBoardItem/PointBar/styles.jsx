import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

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
    position: "absolute",
    top: verticalScale(0),
    alignSelf: "center",
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(15),
    paddingBottom: verticalScale(5),
    color: "#4E3535",
  },
  smallHouseNameText: {
    position: "absolute",
    top: verticalScale(0),
    alignSelf: "center",
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(13),
    paddingBottom: verticalScale(3),
    color: "#4E3535",
  },
  scoreText: {
    position: "absolute",
    top: verticalScale(25),
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(20),
    color: "#FFFFFF",
  },
  smallScoreText: {
    position: "absolute",
    top: verticalScale(20),
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(16),
    color: "#FFFFFF",
  },
});

export default styles;
