import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: verticalScale(5),
  },

  eventLabel: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(18),
    color: "#504545",
    opacity: 0.65,
  },
  eventText: {
    fontFamily: "BalooBhaijaan2-Medium",
    fontSize: fontPercentage(16),
    color: "#504545",
    opacity: 0.65,
    paddingLeft: horizontalScale(5),
  },
});

export default styles;
