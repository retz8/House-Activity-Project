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

  thumbnailContainer: {
    position: "relative",
    height: verticalScale(170),
    elevation: 20,
  },
  thumbnail: {
    width: horizontalScale(375),
    height: verticalScale(170),
    resizeMode: "cover",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  buttonContainer: {
    position: "absolute",
    top: verticalScale(13),
    left: horizontalScale(12),
  },
  backButton: {
    width: horizontalScale(50),
    height: verticalScale(50),
    resizeMode: "cover",
    borderRadius: 15,
  },
  markContainer: {
    position: "absolute",
    bottom: 0,
    left: horizontalScale(257),
  },

  contentContainer: {
    flex: 1,
    overflow: "hidden",
    paddingHorizontal: horizontalScale(20),
  },

  title: {
    paddingTop: verticalScale(15),
    fontSize: fontPercentage(30),
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#4E3535",
    lineHeight: verticalScale(40),
  },
});

export default styles;
