// Logged In User Profile

import { Button, Text, TouchableOpacity, View, ScrollView } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
import { SafeAreaView } from "react-native-safe-area-context";
import { loggedInUserContext } from "../../hooks/UserContext";
import styles from "./styles";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { getUser } from "../../api/user";
import ImageButton from "../../components/ImageButton/ImageButton";

export default function Profile({ navigation }) {
  const { loggedInUser, accessToken, setAccessToken, setLoggedInUser } =
    useContext(loggedInUserContext);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Logout Logic ----------------------------------------
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const signout = async () => {
    setIsLoggingOut(true);
    await AuthSession.revokeAsync(
      {
        token: accessToken,
      },
      {
        revocationEndpoint: "https://oauth2.googleapis.com/revoke",
      }
    );
    console.log("Logout!");

    setAccessToken(undefined);
    setLoggedInUser(undefined);

    navigation.navigate("Welcome");
  };

  // -----------------------------------------------------

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {isLoggingOut ? (
          <Text>Signing out...</Text>
        ) : (
          <View style={styles.contentContainer}>
            <UserProfileCard
              navigation={navigation}
              user={loggedInUser}
              isMine={true}
            />
            <ImageButton
              source={require("../../../assets/Profile/signoutButton.png")}
              style={styles.signoutButton}
              onPress={signout}
            />
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}
