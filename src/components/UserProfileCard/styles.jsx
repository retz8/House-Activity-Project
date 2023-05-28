import { StyleSheet } from "react-native";
import { verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F4F3",
  },

  baseUserInfo: {
    flex: 1,
    width: "100%",
  },

  detailedUser: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
