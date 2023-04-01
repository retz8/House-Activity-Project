import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageButton: {
    width: verticalScale(275), // for responsive design, convert the size fitting into emulator
    height: horizontalScale(50), // horizontal/vertialScale(pixel size on Figma file)
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
