import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  button: {
    marginTop: verticalScale(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: verticalScale(50),
    width: horizontalScale(275),
    height: verticalScale(50),
  },
  text: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(18),
  },
});

export default styles;
