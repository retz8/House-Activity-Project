import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import UsernameDisplay from "../../../components/UsernameDisplay/UsernameDisplay";
import Divider from "../../../components/Divider/Divider";

export default function HouseUsers({ navigation, leaders, members }) {
  const faculty = leaders.faculty[0];
  const student = leaders.student[0];

  const handleUsernameDisplayPress = async (user) => {
    navigation.navigate("UserProfile", { user });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Faculty Leader</Text>
        <UsernameDisplay
          name={faculty.displayName}
          profile={faculty.profilePic.url}
          onPress={() => {
            handleUsernameDisplayPress(faculty);
          }}
        />
      </View>

      <Divider />

      <View style={styles.textContainer}>
        <Text style={styles.label}>Student Leader</Text>
        <UsernameDisplay
          name={student.displayName}
          profile={student.profilePic.url}
          onPress={() => {
            handleUsernameDisplayPress(student);
          }}
        />
      </View>

      <Divider />

      <View style={[styles.textContainer, { alignItems: "flex-start" }]}>
        <Text style={styles.label}>Members</Text>
        <View style={styles.membersContainer}>
          {members.map((user) => (
            <View key={user.id} style={styles.display}>
              <UsernameDisplay
                name={user.displayName}
                profile={user.profilePic.url}
                onPress={() => {
                  handleUsernameDisplayPress(user);
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
