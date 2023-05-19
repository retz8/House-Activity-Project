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
    height: "100%",
    // marginTop: '34.48%',
    backgroundColor: "#F5F4F3",
    // backgroundColor: 'gray',
    flex: 1,
    alignItems: "center",
    // width: horizontalScale(275), // 275 px is the exact width on the Figma file
    // left: horizontalScale(55),
    // height: verticalScale(50), // 50px is the exact width on the Figma file
    // top: verticalScale(10),

    // justifyContent: "center",
    // borderColor: "green",
    // borderWidth: 1,
  },
  username: {
    // margins
    // marginTop: '34.48%',
    // marginLeft:'28.27%',
    fontSize: 33,
    // fontsize: fontPercentage(33), // 33px is the exact font size on the Figma file    fontWeight: "bold",
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#4E3535",
  },
  role: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontWeight: "bold",
    fontSize: 20,
    color: "#504545CC",
  },
  profilePicture: {
    // marginTop: '14.99%',
    width: 125,
    height: 125,
    borderRadius: 125 / 2,
    // alignItems: 'center'
  },
  info: {
    // marginTop: '34.48%',
    width: "100%",
    alignItems: "center",
  },
  infocard: {
    width: 315,
    height: 164,
    borderRadius: 20,
    backgroundColor: "white",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 24,
  },
  titleText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontWeight: "bold",
    fontSize: 16,
    color: "#4E3535",
    marginLeft: 20,
  },
  normalText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontWeight: "bold",
    fontSize: 14,
    color: "#504545A6",
  },
  line: {
    width: 315,
    height: 1,
    // marginTop: 5,
    // flex: 1,
    // alignItems: "center",
    color: "#4E353540",
  },
  bar: {
    borderColor: "#504545A6",
    borderWidth: 1,
    borderRadius: 1,
    marginHorizontal: 20,
    opacity: 0.7,
    // alignItems: 'center'
  },
});

export default styles;
