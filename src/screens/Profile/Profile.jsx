import { View, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as AuthSession from "expo-auth-session";
import { loggedInUserContext } from "../../hooks/UserContext";

import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import Loading from "../../components/Loading/Loading";
import styles from "./styles";
import SignOutButton from "./SignOutButton/SignOutButton";

export default function Profile({ navigation }) {
  const { loggedInUser, accessToken, setAccessToken, setLoggedInUser } =
    useContext(loggedInUserContext);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Sign out Logic ----------------------------------------
  const [isSigningOut, setIsSigningOut] = useState(false);

  const signout = async () => {
    setIsSigningOut(true);
    await AuthSession.revokeAsync(
      {
        token: accessToken,
      },
      {
        revocationEndpoint: "https://oauth2.googleapis.com/revoke",
      }
    );

    setAccessToken(undefined);
    setLoggedInUser(undefined);

    navigation.navigate("Welcome");
  };
  // -----------------------------------------------------

  return (
    <ScrollView>
      {isSigningOut ? (
        <Loading />
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.contentContainer}>
            <UserProfileCard
              navigation={navigation}
              user={loggedInUser}
              isMine={true}
            />
            <SignOutButton text={"Sign out"} onPress={signout} />
          </View>
        </SafeAreaView>
      )}
    </ScrollView>
  );
}
