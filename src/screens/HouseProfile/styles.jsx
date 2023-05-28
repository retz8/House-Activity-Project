import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonContainer: {
    height: verticalScale(55),
    width: "100%",
  },
  backButton: {
    width: horizontalScale(40),
    height: verticalScale(40),
    left: horizontalScale(25),
    top: verticalScale(15),
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  contentsContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F4F3",
  },

  baseHouseInfo: {
    height: verticalScale(250),
    width: "100%",
  },

  houseUsers: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
