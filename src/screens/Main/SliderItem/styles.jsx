import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(350),
    height: verticalScale(250),
    borderColor: "#B2B2B2",
    borderWidth: 0.5,
    borderRadius: 30,
  },

  thumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    backgroundColor: "white",
  },

  desc: {
    height: verticalScale(75),
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    marginLeft: horizontalScale(25),
    fontSize: fontPercentage(19),
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#4E3535",
  },
  date: {
    marginLeft: horizontalScale(25),
    fontSize: fontPercentage(15),
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#504545",
    opacity: 0.65,
  },
});

export default styles;
