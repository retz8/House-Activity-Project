import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  eventLabel: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(18),
    color: "#504545",
    opacity: 0.65,
    paddingRight: horizontalScale(10),
  },

  waitingText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(15),
    color: "#504545",
    opacity: 0.5,
  },

  houseResult: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: horizontalScale(5),
  },
  circle: {
    width: horizontalScale(15),
    height: verticalScale(15),
    borderRadius: verticalScale(15 / 2),
  },
  point: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(16),
    color: "#4E3535",
    paddingLeft: horizontalScale(5),
  },
});

export default styles;
