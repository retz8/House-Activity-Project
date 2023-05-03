import { StyleSheet } from "react-native";
import { fontPercentage, verticalScale } from "../../../helpers/responsiveSize";

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
  listContainer: {
    flex: 1,
    paddingTop: verticalScale(20),
  },
  noEventsText: {
    textAlign: "center",
    fontSize: fontPercentage(20),
    color: "#4E3535",
    fontFamily: "BalooBhaijaan2-Bold",
  },
});

export default styles;
