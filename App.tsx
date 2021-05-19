import React from "react";
import HomeScreen  from "./screens/HomeScreen"
import {
  StyleSheet,
  View,
} from "react-native";

export default function App() {
  console.log("%c App Loading - Test", "color: pink;");
  return (
      <View style={styles.container}>
       <HomeScreen />
      </View>
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
    fontSize: 24,
  },
});
