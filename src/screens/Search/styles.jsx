import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchPageTitle: {
    top: verticalScale(13),
    left: horizontalScale(30),
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#4E3535",
    fontSize: fontPercentage(30),
  },
  noEventsText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(15),
    alignSelf: "center",
    opacity: 0.5,
  },
});

export default styles;
