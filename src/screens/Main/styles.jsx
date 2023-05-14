import { StyleSheet } from "react-native";
import {
  fontPercentage,
  verticalScale,
  horizontalScale,
} from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(30),
    left: horizontalScale(-123),
    marginVertical: verticalScale(9),
  },

  sliderContainer: {
    width: "100%",
    height: verticalScale(296),
  },

  listContainer: {
    width: "100%",
    flex: 1,
  },
});

export default styles;
