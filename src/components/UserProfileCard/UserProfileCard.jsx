import { View } from "react-native";
import React from "react";
import styles from "./styles";
import BaseUserInfo from "./BaseUserInfo/BaseUserInfo";
import DetailedUser from "./DetailedUser/DetailedUser";

export default function UserProfileCard({ navigation, user, isMine = false }) {
  // -----------------------------------------------------
  return (
    <View style={styles.container}>
      <View style={styles.baseUserInfo}>
        <BaseUserInfo
          profilePic={user.profilePic.url}
          username={user.displayName}
          role={user.role}
        />
      </View>

      <View style={styles.detailedUser}>
        <DetailedUser user={user} navigation={navigation} isMine={isMine} />
      </View>
    </View>
  );
}
