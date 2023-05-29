import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F4F3",
  },
  welcomeText: {
    position: "absolute",
    top: verticalScale(171.5),
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(30),
  },
  appNameText: {
    position: "absolute",
    top: verticalScale(215),
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(30),
    color: "#5D0E23",
  },
  descContainer: {
    position: "absolute",
    top: verticalScale(280),
    flexDirection: "row",
  },
  descText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(21),
  },
  schoolNameText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(21),
    color: "#5D0E23",
  },
  imageButton: {
    position: "absolute",
    alignSelf: "center",
    top: verticalScale(10),

    width: horizontalScale(275),
    height: verticalScale(50),
    resizeMode: "contain",
  },
});

export default styles;
