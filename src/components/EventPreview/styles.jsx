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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: verticalScale(135),
    borderRadius: 20,
    backgroundColor: "#F5F4F3",
  },
  hoveredButton: {
    borderRadius: 20,
    backgroundColor: "#4E3535",
  },
  thumbnailImage: {
    width: horizontalScale(90),
    height: verticalScale(90),
    resizeMode: "contain",
    backgroundColor: "white",
    marginRight: horizontalScale(10),
  },

  rightContainer: {
    width: horizontalScale(235),
  },
  eventTitle: {
    color: "#4E3535",
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(20),
  },

  dateContainer: {
    flexDirection: "row",
  },
  eventLabel: {
    color: "#504545",
    opacity: 0.65,
    fontSize: fontPercentage(16),
    fontFamily: "BalooBhaijaan2-Bold",
  },
  eventText: {
    color: "#504545",
    opacity: 0.65,
    fontSize: fontPercentage(16),
    fontFamily: "BalooBhaijaan2-Medium",
  },
});

export default styles;
