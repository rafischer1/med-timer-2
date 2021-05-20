import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { StyleSheet, View } from "react-native";
import Tabs from "./navigation/MainTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  console.log("%c App Loading - Test", "color: pink;");
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
});
