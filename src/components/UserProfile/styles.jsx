import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonContainer: {
    height: horizontalScale(55),
    width: "100%",
  },
  backButton: {
    width: verticalScale(30), // for responsive design, convert the size fitting into emulator
    height: horizontalScale(30), // horizontal/vertialScale(pixel size on Figma file)
    left: horizontalScale(45),
    top: verticalScale(18.32),
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

// fontFamily: "BalooBhaijaan2-Bold",

export default styles;
