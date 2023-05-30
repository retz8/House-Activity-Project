import { Keyboard, TextInput, View } from "react-native";
import React from "react";
import styles from "./styles";
import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function SearchBar({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}) {
  return (
    <View style={styles.container}>
      <View
        style={clicked ? styles.searchBar_clicked : styles.searchBar_unclicked}
      >
        <View style={styles.searchBarLeft}>
        <Image
          source={require("../../../../assets/Search/searchIcon.png")}
          style={styles.searchIcon}
        />

        <TextInput
          style={styles.searchBarText}
          placeholder="Type House Events Name"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        </View>
        

        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={30}
            style={styles.crossIcon}
            onPress={() => {
              setSearchPhrase("");
              Keyboard.dismiss();
              setClicked(false);
            }}
          />
        )}
      </View>
    </View>
  );
}
