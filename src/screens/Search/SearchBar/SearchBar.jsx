import { Text, View } from "react-native";
import React, { Component, useContext, useEffect } from "react";
import { loggedInUserContext } from "../../../hooks/UserContext";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { Image } from "react-native";

export default function SearchBar() {
  const { loggedInUser, initialEvents } = useContext(loggedInUserContext);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require("../../../../assets/Search/searchIcon.png")}
        style={styles.searchIcon}
      />
      <Text style={styles.searchBarText}>Type House Events Name</Text>
    </TouchableOpacity>
  );
}
