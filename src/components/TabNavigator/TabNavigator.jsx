// Bottom Tab Navigator
// all of the assets are at assets/TabNavigator
// please use separate "styles.jsx" file for styling
// Don't directly write style here

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LeaderBoard from "../../screens/LeaderBoard/LeaderBoard";
import Search from "../../screens/Search/Search";
import Profile from "../../screens/Profile/Profile";
import Main from "../../screens/Main/Main";
import styles from "./styles";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="LeaderBoard" component={LeaderBoard} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
