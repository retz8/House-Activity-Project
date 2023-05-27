import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import Divider from "../../Divider/Divider";
import { getHouseColor } from "../../../helpers/houseColors";

export default function DetailedUser({
  navigation,
  email,
  house,
  introduction,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>{email}</Text>
      </View>

      <Divider />

      <View style={styles.textContainer}>
        <Text style={styles.label}>House</Text>
        <View>
          <TouchableOpacity
            style={styles.houseText}
            onPress={() =>
              navigation.navigate("HouseProfile", { houseName: house })
            }
          >
            <View
              style={[
                styles.houseColorIcon,
                { backgroundColor: getHouseColor(house) },
              ]}
            />
            <Text style={styles.text}>{house}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Divider />

      <View style={styles.textContainer}>
        <Text style={styles.label}>User Intro</Text>
        <Text style={styles.text}>{introduction}</Text>
      </View>
    </View>
  );
}
