import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -verticalScale(15),
    flex: 1,
    width: horizontalScale(170),
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: verticalScale(170),
  },
  crest: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    alignSelf: "center",
  },

  houseName: {
    textAlign: "center",
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(30),
    lineHeight: verticalScale(45),
    color: "#4E3535",
  },
  points: {
    textAlign: "center",
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(50),
    lineHeight: verticalScale(65),
  },
});

export default styles;
