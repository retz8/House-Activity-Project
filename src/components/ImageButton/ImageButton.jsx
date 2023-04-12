import React from "react";
import { TouchableOpacity, Image, Text, ImageBackground } from "react-native";

const ImageButton = ({ source, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={style} />
    </TouchableOpacity>
  );
};

export default ImageButton;
