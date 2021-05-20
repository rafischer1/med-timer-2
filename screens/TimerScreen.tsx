import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import { MontserratText } from "../components/MontserratText";
import Timer from "../components/Timer";

const TimerScreen = () => {
  return (
    <SafeAreaView>
      <MontserratText style={styles.container}>Timer</MontserratText>
      <Timer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
    fontWeight: "bold",
    marginTop: 80,
    height: 400,
    fontSize: 25,
    textDecorationLine: "underline",
    textDecorationColor: "#78EFE4",
  },
});

export default TimerScreen;
