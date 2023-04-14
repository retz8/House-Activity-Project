import { StyleSheet } from "react-native";
import { fontPercentage, verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  renderItemContainer: {
    marginBottom: verticalScale(7.5),
  },
  testText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: 30,
  },
  listContainer: {
    width: "100%",
    flex: 1,
  },
  noEventsText: {
    fontFamily: "BalooBhaijaan2-Bold",
    fontSize: fontPercentage(15),
    alignSelf: "center",
    opacity: 0.5,
  },
  logoutButton: {},
});

export default styles;
