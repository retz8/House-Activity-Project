import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ball: {
    width: horizontalScale(20),
    height: verticalScale(20),
    borderRadius: horizontalScale(10),
    marginRight: horizontalScale(5),
  },
  text: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(18),
  },
});

export default styles;
