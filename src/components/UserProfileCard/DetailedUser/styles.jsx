import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",

    width: horizontalScale(315),
    marginBottom: verticalScale(20),
    borderRadius: 25,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(10),
  },
  label: {
    fontSize: fontPercentage(16),
    color: "#4E3535",
    fontFamily: "BalooBhaijaan2-Bold",
  },
  text: {
    fontSize: fontPercentage(14),
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#504545",
    opacity: 0.65,
    maxWidth: verticalScale(170),
    textAlign: "right",
  },

  houseText: {
    flex: 1,
    flexDirection: "row",
  },
  houseColorIcon: {
    height: verticalScale(20),
    width: horizontalScale(20),
    borderRadius: horizontalScale(20) / 2,
    marginRight: horizontalScale(5),
  },
});

// fontFamily: "BalooBhaijaan2-Bold",

export default styles;
