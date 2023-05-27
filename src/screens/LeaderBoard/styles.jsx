import { StyleSheet, StatusBar } from "react-native";
import {
    fontPercentage,
    horizontalScale,
    verticalScale,
} from "../../helpers/responsiveSize";

/*
WHEN YOU ARE USING WIDHT / HEIGHT / FONTSIZE
ex) 
width: verticalScale(275), // for responsive design, convert the size fitting into emulator
height: horizontalScale(50), // horizontal/vertialScale(pixel size on Figma file)
fontSize: fontPercentage(18), // 18: 18px
*/

/*
TO USE SAME FONT IN FIGMA FILE
ex)
fontFamily: "BalooBhaijaan2-Medium",
*/

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    eventSummariesContainer: {
        width: "100%",
        height: horizontalScale(287),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FF0000', 
    },
});

export default styles;
