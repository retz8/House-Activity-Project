import React, { useContext, useEffect, useState } from "react";
import { LogBox, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageButton from "../../components/ImageButton/ImageButton";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import styles from "./styles";
import { loggedInUserContext } from "../../hooks/UserContext";
import { Image } from "react-native";
import { API_URL } from "@env";
import axios from "axios";
import { Text } from "react-native";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID, EXPO_CLIENT_ID } from "@env";
import { getEvents, getFilteredEvents } from "../../api/event";
import { getUser } from "../../api/user";

WebBrowser.maybeCompleteAuthSession();
LogBox.ignoreAllLogs();

function Welcome({ navigation }) {
  const {
    setLoggedInUser,
    setAccessToken,
    initialEvents,
    setInitialEvents,
    initialFilteredEvents,
    setInitialFilteredEvents,
  } = useContext(loggedInUserContext);
  const [loggingIn, setLogginIn] = useState(false);

  console.log(EXPO_CLIENT_ID);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
  });

  // handle google login + backend request
  useEffect(() => {
    // console.log(response);
    if (response?.type === "success") {
      // user successfully logged in
      setLogginIn(true);
      setAccessToken(response.authentication.accessToken);
      //console.log(`AccessToken: ${response.authentication.accessToken}`);
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
          //console.log(user);

          fetch(API_URL + "/api/auth/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${response.authentication.accessToken}`, // pass the access token in the Authorization header
            },
            body: JSON.stringify({
              user,
              // pass any additional data needed to create the user
            }),
          })
            .then((response) => response.json())
            .then(async (data) => {
              setLoggedInUser(data);

              // pageNum: 0, limit: 5,
              const { error, events } = await getEvents(0, 5);
              if (error) return console.log(error);
              setInitialEvents(events);

              // pageNum: 0, limit: 5 - Leaderboard,
              const { error: f_error, events: f_events } =
                await getFilteredEvents(0, 5);
              if (f_error) return console.log(error);
              setInitialFilteredEvents(f_events);

              console.log("successfully fetched user!");
              console.log("Navigating to main page...");
              setLogginIn(false);
              navigation.push("MainStack");
            })
            .catch((error) => {
              console.log(error);
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

  const handleLoginPress = async () => {
    console.log("button pressed!");
    const { error, user } = await getUser("642ba16c1ed485ae197e6364");
    if (error) console.log(error);
    console.log(user);
    setLoggedInUser(user);

    // pageNum: 0, limit: 5,
    const { error: eError, events } = await getEvents(0, 5);
    if (eError) return console.log(error);
    setInitialEvents(events);

    // pageNum: 0, limit: 5 - Leaderboard,
    const { error: f_error, events: f_events } = await getFilteredEvents(0, 5);
    if (f_error) return console.log(error);
    setInitialFilteredEvents(f_events);

    console.log("successfully fetched user!");
    console.log("Navigating to main page...");
    setLogginIn(false);
    navigation.push("MainStack");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Login */}

      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.appNameText}>Pig Says Oink!</Text>
      <View style={styles.descContainer}>
        <Text style={styles.descText}>For </Text>
        <Text style={styles.schoolNameText}>PRISMS </Text>
        <Text style={styles.descText}>House Events</Text>
      </View>
      {loggingIn ? (
        // Loading Image, same button size as Login button
        <Image
          source={require("../../../assets/Welcome/loggingInButton.png")}
          style={styles.imageButton}
        />
      ) : (
        // Login Image button
        // <ImageButton
        //   source={require("../../../assets/Welcome/loginButton.png")}
        //   style={styles.imageButton}
        //   onPress={() => promptAsync({ showInRecents: false })}
        // />
        <ImageButton
          source={require("../../../assets/Welcome/loginButton.png")}
          style={styles.imageButton}
          onPress={handleLoginPress}
        />
      )}
    </SafeAreaView>
  );
}

export default Welcome;
