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
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ball: {
    height: verticalScale(20),
    aspectRatio: 1,
    borderRadius: verticalScale(10),
    marginRight: horizontalScale(5),
  },
  text: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(18),
    color: "#4E3535",
  },
});

export default styles;
