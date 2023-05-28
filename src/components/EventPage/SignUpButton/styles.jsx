import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  imageButton: {
    width: horizontalScale(325),
    height: verticalScale(50),
    resizeMode: "contain",
    marginBottom: verticalScale(10),
  },
});

export default styles;
