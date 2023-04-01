// House Profile Page
// data = user object
// data: {
//   id: user's id in database,
//   displayName: user's full name,
//   email: user's google email,
//   profilePic: user's profile picture,
//     {
//       url: profile picture url (use this value as an image source)
//       public_id: public_id on cloudinary
//     }
//   introduction: user's introduction,
//   role: user's role,
//   house: user's house,'
// },

import { Button, Text, TouchableOpacity, View } from "react-native";
import React, { Component, useContext, useState } from "react";
import * as AuthSession from "expo-auth-session";
import { SafeAreaView } from "react-native-safe-area-context";
import { loggedInUserContext } from "../../hooks/UserContext";
import styles from "./styles";

export default function HouseProfile({ navigation, route }) {
  const { loggedInUser, accessToken, setAccessToken, setLoggedInUser } =
    useContext(loggedInUserContext);
  const { houseName } = route.params;

  // -----------------------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      <Button title="go back" onPress={() => navigation.pop()} />
    </SafeAreaView>
  );
}
