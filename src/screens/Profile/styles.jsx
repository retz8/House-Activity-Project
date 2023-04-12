import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButtonContainer: {
    height: horizontalScale(55),
    width: "100%",
  },
  logoutButton: {
    width: verticalScale(100), // for responsive design, convert the size fitting into emulator
    height: horizontalScale(20), // horizontal/vertialScale(pixel size on Figma file)
    left: horizontalScale(45),
    top: verticalScale(18.32),
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  testText: {
    fontFamily: "BalooBhaijaan2-Regular",
    fontSize: 30,
  },
});

export default styles;
