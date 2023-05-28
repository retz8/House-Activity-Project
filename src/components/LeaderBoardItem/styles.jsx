import { StyleSheet } from "react-native";
import { horizontalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(15),
    backgroundColor: "white",
    borderRadius: 30,
  },
  houseContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
