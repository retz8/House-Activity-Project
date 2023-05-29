import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: verticalScale(10),
  },
  profilePicture: {
    aspectRatio: 1,
    height: verticalScale(125),
    borderRadius: verticalScale(125 / 2),
    resizeMode: "contain",
  },
  username: {
    position: "absolute",
    top: verticalScale(125),
    fontSize: fontPercentage(33),
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#4E3535",
  },
  role: {
    position: "absolute",
    top: verticalScale(175),
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(20),
    color: "#504545CC",
  },
});

export default styles;
