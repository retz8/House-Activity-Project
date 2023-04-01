import React from "react";
import { TouchableOpacity, Text, ImageBackground } from "react-native";

const ImageTextButton = ({ source, style, text, textStyle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={source} style={style}>
        <Text>wow</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ImageTextButton;
