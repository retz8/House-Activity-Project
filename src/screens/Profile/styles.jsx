import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: verticalScale(25),
  },
  contentContainer: {},
  signoutButton: {
    top: verticalScale(-15),
    alignSelf: "flex-end",
    width: "100%",
    resizeMode: "cover",
  },
});

export default styles;
