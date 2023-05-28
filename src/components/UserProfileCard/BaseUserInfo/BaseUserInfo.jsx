import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

export default function BaseUserInfo({ profilePic, username, role }) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.profilePicture}
          source={{ uri: profilePic }}
          alt=""
        />
      </View>

      <Text style={styles.username}>{username}</Text>

      <Text style={styles.role}>
        {role === "HouseLeader" ? "House Leader" : role}
      </Text>
    </View>
  );
}
