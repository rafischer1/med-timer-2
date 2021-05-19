import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.container}>Home Screen</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
});

export default HomeScreen;
