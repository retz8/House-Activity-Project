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
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: horizontalScale(315),
    marginVertical: verticalScale(20),
    borderRadius: 25,
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(20),
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(10),
  },
  label: {
    fontSize: fontPercentage(16),
    color: "#4E3535",
    fontFamily: "BalooBhaijaan2-Bold",
  },
  membersContainer: {
    overflow: "scroll",
  },
  display: {
    paddingBottom: verticalScale(5),
    flex: 1,
    alignItems: "flex-end",
  },
});

export default styles;
