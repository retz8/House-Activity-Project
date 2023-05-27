import { StyleSheet } from "react-native";
import {
  fontPercentage,
  horizontalScale,
  verticalScale,
} from "../../../helpers/responsiveSize";

/*
WHEN YOU ARE USING WIDTH / HEIGHT / FONTSIZE
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

    eventContainer: {
        flexDirection: "row", 
        justifyContent: "space-evenly",
        alignItems: "center", 
        width: 375, 
        height: 110,
        borderColor: "#123456", 
        backgroundColor: "#FAF9F8", 
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    detailsContainer: {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 250,
        height: 90,
    },
    scoresContainer: {
        flexDirection: "row", 
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 250,
        height: 40,
    },
    oneHouse: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center", 
        width: 60,
        height: 30, 
    }, 
    title: {
        fontFamily: "Baloo Bhaijaan",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 32,
        color: "#4E3535",
    },
    score: {
        fontFamily: "Baloo Bhaijaan",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 27.13,
        color: "#4E3535",
    }
});

export default styles;
