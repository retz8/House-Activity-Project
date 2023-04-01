// <UserProfileCard>
// user: {
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
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

export default function UserProfileCard({ user }) {
  // -----------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <Text>{user.displayName}</Text>
    </SafeAreaView>
  );
}
