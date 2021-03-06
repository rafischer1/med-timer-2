import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { MontserratText } from "../components/MontserratText";
import Timer from "../components/Timer";
import { soundActive$ } from "../stores/sound-toggle.store";

const soundState$ = soundActive$;

const TimerScreen = () => {
  return (
    <SafeAreaView>
      <MontserratText style={styles.container}>Timer</MontserratText>
      <Timer soundState$={soundState$} />
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
