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
    justifyContent: "center",
    alignItems: "center",
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
    resizeMode: "contain",
    alignSelf: "center",
  },

  houseName: {
    position: "absolute",
    top: verticalScale(170),
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(30),
    color: "#4E3535",
  },
  points: {
    position: "absolute",
    top: verticalScale(200),
    fontFamily: "BalooBhaijaan2-ExtraBold",
    fontSize: fontPercentage(50),
  },
});

export default styles;
