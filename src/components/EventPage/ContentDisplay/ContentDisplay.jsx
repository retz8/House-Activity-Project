import { View, Text } from "react-native";
import React, { useEffect } from "react";
import RenderHtml from "react-native-render-html";
import styles from "./styles";
import { ScrollView } from "react-native";

export default function ContentDisplay({ content }) {
  const source = {
    html: `${content}`,
  };

  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <RenderHtml contentWidth={400} baseStyle={styles.content} source={source} />
  );
}
