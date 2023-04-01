import { Button, Text } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { loggedInUserContext } from "../../hooks/UserContext";
import * as AuthSession from "expo-auth-session";

export default function Main({ navigation, route }) {
  const { loggedInUser, accessToken, setAccessToken, setLoggedInUser } =
    useContext(loggedInUserContext);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    console.log(loggedInUser);
  }, [navigation]);

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

  return (
    <SafeAreaView>
      <Button title="Logout" onPress={logout} />
      {!isLoggingOut ? (
        <Text>{loggedInUser.displayName}</Text>
      ) : (
        <Text>Logging out..d.</Text>
      )}
    </SafeAreaView>
  );
}
