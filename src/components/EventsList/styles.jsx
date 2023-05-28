import { StyleSheet } from "react-native";
import { fontPercentage, verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
    paddingTop: verticalScale(3),
  },
  noEventsText: {
    textAlign: "center",
    fontSize: fontPercentage(20),
    color: "#4E3535",
    fontFamily: "BalooBhaijaan2-Bold",
  },
});

export default styles;
