import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "aqua",
  },
  logoutButton: {
    width: verticalScale(275), // for responsive design, convert the size fitting into emulator
    height: horizontalScale(50), // horizontal/vertialScale(pixel size on Figma file)
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
});

// fontFamily: "BalooBhaijaan2-Bold",

export default styles;
