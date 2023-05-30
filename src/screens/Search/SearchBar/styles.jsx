import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

const styles = StyleSheet.create({
  searchBar_unclicked: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: verticalScale(15),
    width: horizontalScale(335),
    height: verticalScale(50),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  searchBar_clicked: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: verticalScale(15),
    width: horizontalScale(335),
    height: verticalScale(50),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  searchBarLeft: {
    flex: 1,
    flexDirection: "row",
    maxWidth: horizontalScale(220),
  },

  searchIcon: {
    left: horizontalScale(25),
    width: horizontalScale(24),
    height: verticalScale(24),
  },
  crossIcon: {
    paddingRight: horizontalScale(20),
    color: "gray",
  },
  searchBarText: {
    left: horizontalScale(36),
    fontSize: fontPercentage(16),
    color: "#504545",
    opacity: 0.65,
    fontFamily: "BalooBhaijaan2-Bold",
  },
});

export default styles;
