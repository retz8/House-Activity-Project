import { StyleSheet } from "react-native";
import { verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingTop: verticalScale(25),
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default styles;
