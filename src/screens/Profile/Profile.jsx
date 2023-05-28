import { View, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as AuthSession from "expo-auth-session";
import { loggedInUserContext } from "../../hooks/UserContext";

import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import ImageButton from "../../components/ImageButton/ImageButton";
import styles from "./styles";

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
      <SafeAreaView style={styles.container}>
        {isSigningOut ? (
          <ImageButton
            source={require("../../../assets/Profile/signoutLoadingButton.png")}
            style={styles.signoutButton}
            onPress={() => {}}
          />
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
