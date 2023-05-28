import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
  },
  profilePicture: {
    width: horizontalScale(125),
    aspectRatio: 1,
    borderRadius: horizontalScale(125) / 2,
    resizeMode: "cover",
    marginBottom: verticalScale(10),
  },
  username: {
    fontSize: fontPercentage(33),
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#4E3535",
    lineHeight: verticalScale(50),
    marginBottom: verticalScale(-10),
  },
  role: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(20),
    color: "#504545CC",
  },
});

export default styles;
