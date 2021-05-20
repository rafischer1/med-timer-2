import React from "react";
import { StyleSheet, SafeAreaView, Vibration } from "react-native";
import { MontserratText } from "../components/MontserratText";
import HomeContactButtons from "../components/HomeContactButtons";

const HomeScreen = () => {
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <MontserratText
        style={styles.container}
        onPress={() => Vibration.vibrate(PATTERN)}
      >
        Welcome to Med Timer 2.0
      </MontserratText>
      <HomeContactButtons />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: 100,
    height: 200,
    fontSize: 25,
    textDecorationLine: "underline",
    textDecorationColor: "#78EFE4",
  },
});

export default HomeScreen;
