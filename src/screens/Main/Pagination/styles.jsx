import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(62),
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  singleBar: {
    width: horizontalScale(14),
    height: verticalScale(7),
    borderRadius: 5,
    backgroundColor: "#504545",
    opacity: 0.2,
  },
  activeBar: {
    backgroundColor: "#78060C",
    opacity: 0.77,
  },
});

export default styles;
