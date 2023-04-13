import { Button, Text, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import styles from "./styles";
import { loggedInUserContext } from "../../../hooks/UserContext";

export default function Slider({ data }) {
  const { loggedInUser, accessToken, setAccessToken, setLoggedInUser } =
    useContext(loggedInUserContext);

  useEffect(() => {
    data.map((ev) => {
      console.log(ev.title);
    });
  }, [data.length]);

  return (
    <View>
      {/* {data.map((ev) => {
        return <Text style={styles.testText}>{ev.title}</Text>;
      })} */}
      <Text>Hello World</Text>
    </View>
  );
}
