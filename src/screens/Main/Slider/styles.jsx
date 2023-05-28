import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },

  itemContainer: {
    width: horizontalScale(350),
    height: verticalScale(250),
  },

  paginationContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
