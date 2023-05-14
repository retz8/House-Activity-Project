import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    height: verticalScale(33),
    width: horizontalScale(91),
    position: "absolute",
    top: verticalScale(142),
    right: horizontalScale(20),
    zIndex: 50,
    backgroundColor: "#FAF9F8",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
  },
  text: {
    fontSize: fontPercentage(15),
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#E54E4E",
  },
});

export default styles;
