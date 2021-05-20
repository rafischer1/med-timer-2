import React from "react";
import { Text, StyleSheet } from "react-native";

const TimerScreen = () => {
  return <Text style={styles.container}>Timer Screen</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
});

export default TimerScreen;
