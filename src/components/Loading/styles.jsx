import { StyleSheet } from "react-native";
import { fontPercentage } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontFamily: "BalooBhaijaan2-Bold",
    color: "#4E3535",
    fontSize: fontPercentage(30),
  },
});

export default styles;
