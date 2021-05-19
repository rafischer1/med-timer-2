import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.container}>Welcome to Med Timer 2.0</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black",
    margin: "auto",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginTop: 100,
    height: 200,
    fontSize: 25,
    textDecorationLine: "underline",
    textDecorationColor: "teal"
  },
});

export default HomeScreen;
