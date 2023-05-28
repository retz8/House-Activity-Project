import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";
import ImageButton from "../../ImageButton/ImageButton";
import * as WebBrowser from "expo-web-browser";

export default function SignUpButton({ link }) {
  const handleSignUpButton = async () => {
    let result = await WebBrowser.openBrowserAsync(link);
    console.log(result);
  };

  return (
    <View>
      <ImageButton
        source={require("../../../../assets/EventPage/signUpButton.png")}
        style={styles.imageButton}
        onPress={handleSignUpButton}
      />
    </View>
  );
}
