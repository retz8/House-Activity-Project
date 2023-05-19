// Logged In User Profile
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
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import ImageButton from "../ImageButton/ImageButton";

export default function UserProfile({ navigation, route }) {
  const { user } = route.params;
  const { loggedInUser, accessToken, setAccessToken, setLoggedInUser } =
    useContext(loggedInUserContext);

  // -----------------------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <ImageButton
          source={require("../../../assets/UserProfile/backButton.png")}
          style={styles.backButton}
          onPress={() => navigation.pop()}
        />
      </View>

      <View style={styles.contentsContainer}>
        <UserProfileCard user={user} />
      </View>
    </SafeAreaView>
  );
}
