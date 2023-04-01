// Logged In User Profile

import { Button, Text, TouchableOpacity, View } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
import { SafeAreaView } from "react-native-safe-area-context";
import { loggedInUserContext } from "../../hooks/UserContext";
import styles from "./styles";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";

export default function Profile({ navigation }) {
  const { loggedInUser, accessToken, setAccessToken, setLoggedInUser } =
    useContext(loggedInUserContext);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    // console.log(loggedInUser);
  }, [navigation]);

  // Logout Logic ----------------------------------------
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const logout = async () => {
    await AuthSession.revokeAsync(
      {
        token: accessToken,
      },
      {
        revocationEndpoint: "https://oauth2.googleapis.com/revoke",
      }
    );
    console.log("Logout!");
    setIsLoggingOut(true);
    setAccessToken(undefined);
    setLoggedInUser(undefined);

    navigation.navigate("Welcome");
  };
  // -----------------------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      {isLoggingOut ? (
        <Text>Logging out...</Text>
      ) : (
        <View style={styles.container}>
          {/* 1. Logout Button: need styling */}
          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Text>Logout</Text>
          </TouchableOpacity>

          {/* 2. UserProfileCard: user = loggedInUser */}
          <UserProfileCard user={loggedInUser} />
        </View>
      )}
    </SafeAreaView>
  );
}
