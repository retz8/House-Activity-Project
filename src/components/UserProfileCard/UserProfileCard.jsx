// <UserProfileCard>
// user: current user
// please refer to "API Documentation" for more details to access values of user

import { Button, Text, TouchableOpacity, View, ImageBackground, Image } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

export default function UserProfileCard({ user }) {

  // -----------------------------------------------------
  return (

    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{ uri: user.profilePic.url }}
          style={styles.profilePicture}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.username}>{user.displayName} </Text>
        <Text style={styles.role}>{user.role}</Text>
      </View>
      <View
        style={styles.infocard}
      >

        <View style={styles.textContainer}>
          <Text style={
          styles.titleText}>Email Address</Text>

          <Text style={[styles.normalText, {marginRight: 25}]}>{user.email}</Text>
        </View>

        <View style={styles.bar}/>

        <View style={styles.textContainer}>
          <Text style={
          styles.titleText}>House</Text>

          <Text style={[styles.normalText, {marginRight: 25}]}>{user.house}</Text>
        </View>
        <View style={styles.bar}/>
        <View style={styles.textContainer}>
          <Text style={
          styles.titleText}>User Intro</Text>
          <Text style={styles.normalText}>{user.introduction}</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}


