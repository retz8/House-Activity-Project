import React, { useContext, useEffect, useState } from "react";
import { LogBox, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { loggedInUserContext } from "../../hooks/UserContext";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

import {
  ANDROID_CLIENT_ID,
  IOS_CLIENT_ID,
  EXPO_CLIENT_ID,
  API_URL,
} from "@env";

import ImageButton from "../../components/ImageButton/ImageButton";
import styles from "./styles";

WebBrowser.maybeCompleteAuthSession();
LogBox.ignoreAllLogs();

function Welcome({ navigation }) {
  const { setLoggedInUser, setAccessToken } = useContext(loggedInUserContext);
  const [loggingIn, setLogginIn] = useState(false);

  // Google OAuth Configuration
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
  });

  // handle google login + create/fetch user info
  useEffect(() => {
    if (response?.type === "success") {
      // user successfully logged in
      setLogginIn(true);
      setAccessToken(response.authentication.accessToken);
      const fetchUser = async () => {
        try {
          const googleResponse = await fetch(
            "https://www.googleapis.com/userinfo/v2/me",
            {
              headers: {
                Authorization: `Bearer ${response.authentication.accessToken}`,
              },
            }
          );

          const user = await googleResponse.json();

          // create new user (if db already has user, server returns current user)
          fetch(API_URL + "/api/auth/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${response.authentication.accessToken}`, // pass the access token in the Authorization header
            },
            body: JSON.stringify({
              user,
            }),
          })
            .then((response) => response.json())
            .then(async (data) => {
              setLoggedInUser(data);

              console.log("Navigating to main page...");
              navigation.push("MainStack");
              setLogginIn(false);
            })
            .catch((error) => {
              console.log(error);
              setLogginIn(false);
              // handle errors
              // fail to login
            });
        } catch (error) {
          console.error(error);
          // Add your own error handler here
        }
      };
      fetchUser();
    }
  }, [response]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.appNameText}>Pig Says Oink!</Text>
      <View style={styles.descContainer}>
        <Text style={styles.descText}>For </Text>
        <Text style={styles.schoolNameText}>PRISMS </Text>
        <Text style={styles.descText}>House Events</Text>
      </View>
      {loggingIn ? (
        // LogginIn Image
        <ImageButton
          source={require("../../../assets/Welcome/loggingInButton.png")}
          style={styles.imageButton}
          onPress={() => {}}
        />
      ) : (
        // Login Image button
        <ImageButton
          source={require("../../../assets/Welcome/loginButton.png")}
          style={styles.imageButton}
          onPress={() => promptAsync({ showInRecents: false })}
        />
      )}
    </SafeAreaView>
  );
}

export default Welcome;
