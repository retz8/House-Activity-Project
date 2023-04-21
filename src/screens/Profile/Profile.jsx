// Logged In User Profile

import { Button, Text, TouchableOpacity, View } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
import { SafeAreaView } from "react-native-safe-area-context";
import { loggedInUserContext } from "../../hooks/UserContext";
import styles from "./styles";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { getUser } from "../../api/user";

export default function Profile({ navigation }) {
  const { loggedInUser, accessToken, setAccessToken, setLoggedInUser } =
    useContext(loggedInUserContext);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
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

  const fakeLogout = () => {
    console.log("Logout");
    setIsLoggingOut(true);
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
          <View style={styles.logoutButtonContainer}>
            <TouchableOpacity style={styles.logoutButton} onPress={fakeLogout}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>

          {/* 2. UserProfileCard: user = loggedInUser */}
          <UserProfileCard user={loggedInUser} />
        </View>
      )}
    </SafeAreaView>
  );
}
