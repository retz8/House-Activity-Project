import React, { useContext, useEffect, useState } from "react";
import { Button, LogBox } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageButton from "../../components/ImageButton/ImageButton";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import styles from "./styles";
import { loggedInUserContext } from "../../hooks/UserContext";
import { Image } from "react-native";

WebBrowser.maybeCompleteAuthSession();
LogBox.ignoreAllLogs();

function Welcome({ navigation }) {
  const { setLoggedInUser, setAccessToken } = useContext(loggedInUserContext);
  const [loggingIn, setLogginIn] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "663350635242-o7a5c8edndbe8mdjd9o7kgl18rk72jbo.apps.googleusercontent.com",
    iosClientId:
      "663350635242-6krbv85q4p0gpuiibu34npfl441c8jm3.apps.googleusercontent.com",
    expoClientId:
      "663350635242-9qgom49t0skuhfjfhbf2p3olk16g21m8.apps.googleusercontent.com",
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

          fetch("http://192.168.0.114:8080/api/auth/create", {
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
            .then((data) => {
              setLogginIn(false);
              setLoggedInUser(data);
              console.log("successfully fetched user!");
              console.log("Navigating to main page...");
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

  return (
    <SafeAreaView style={styles.container}>
      {/* Login */}
      {loggingIn ? (
        <Image
          source={require("../../../assets/Welcome/loggingInButton.png")}
          style={styles.imageButton}
        />
      ) : (
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
