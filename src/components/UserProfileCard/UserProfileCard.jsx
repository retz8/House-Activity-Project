// <UserProfileCard>
// user: current user
// please refer to "API Documentation" for more details to access values of user

import {
  Button,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import BaseUserInfo from "./BaseUserInfo/BaseUserInfo";
import DetailedUser from "./DetailedUser/DetailedUser";

export default function UserProfileCard({ navigation, user }) {
  // -----------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.baseUserInfo}>
        <BaseUserInfo
          profilePic={user.profilePic.url}
          username={user.displayName}
          role={user.role}
        />
      </View>

      <View style={styles.detailedUser}>
        <DetailedUser
          navigation={navigation}
          email={user.email}
          house={user.house}
          introduction={user.introduction}
        />
      </View>
    </SafeAreaView>
  );
}
