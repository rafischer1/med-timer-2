import React from "react";
import { Text, StyleSheet, SafeAreaView, Vibration } from "react-native";
import { MontserratText } from "../components/MontserratText";
import ModeSwitch from "../components/ModeSwitch";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MontserratText style={styles.container}>Settings/Profile</MontserratText>
      <SafeAreaView style={{ marginTop: 20 }}>
        <ModeSwitch />
      </SafeAreaView>
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
    marginTop: 80,
    height: 200,
    fontSize: 25,
    textDecorationLine: "underline",
    textDecorationColor: "#78EFE4",
  },
});

export default ProfileScreen;
