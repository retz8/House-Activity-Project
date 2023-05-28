import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import Divider from "../../Divider/Divider";
import { getHouseColor } from "../../../helpers/houseColors";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useEffect } from "react";
import { updateUser } from "../../../api/user";

export default function DetailedUser({ navigation, user, isMine = false }) {
  const {
    displayName,
    email,
    profilePic,
    grade,
    role,
    house,
    introduction,
    id,
  } = user;

  const [intro, setIntro] = useState();
  const [isTyping, setIsTyping] = useState(false);

  const handleTextChange = (newText) => {
    setIntro(newText);
    setIsTyping(newText !== introduction);
  };

  const handleSubmit = async () => {
    const newUser = {
      displayName,
      email,
      profilePic,
      grade,
      role,
      house,
      introduction: intro,
    };

    const { error, user } = await updateUser(id, newUser);
    if (error) {
      console.log(error);
    }
    setIsTyping(false);
  };

  useEffect(() => {
    setIntro(introduction);
  }, []);

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
        {/* {isMine ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.text}
              value={intro}
              onChangeText={handleTextChange}
              placeholder={intro ? intro : "edit intro "}
            />
            {isTyping && (
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => handleSubmit()}
              >
                <Entypo
                  name="check"
                  size={styles.houseColorIcon.height}
                  color="brown"
                />
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <Text style={styles.text}>{introduction}</Text>
        )} */}
      </View>
    </View>
  );
}
