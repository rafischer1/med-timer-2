import React, { useCallback } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Linking,
  Alert,
  View,
  Vibration,
} from "react-native";
import { MontserratText } from "../components/MontserratText";

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
        onPress={() => Vibration.vibrate()}
      >
        Welcome to Med Timer 2.0
      </MontserratText>
      <View style={styles.buttonContainerThree}>
        <Button
          color={"black"}
          title={"Github Repo"}
          onPress={() =>
            navTo({ url: "https://github.com/rafischer1/med-timer-2" })
          }
        />
      </View>
      <View style={styles.buttonContainerOne}>
        <Button
          color={"black"}
          title={"LinkedIn"}
          onPress={() =>
            navTo({ url: "https://www.linkedin.com/in/robert-a-fischer/" })
          }
        />
      </View>
      <View style={styles.buttonContainerTwo}>
        <Button
          color={"black"}
          title={"Instagram"}
          onPress={() => navTo({ url: "https://www.instagram.com/peacemang/" })}
        />
      </View>
    </SafeAreaView>
  );
};

const navTo = ({ url }): any => Linking.openURL(url);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#333",
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
    textDecorationColor: "#78EFE4",
  },
  buttonContainerOne: {
    width: 210,
    backgroundColor: "#78DCEF",
    color: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonContainerTwo: {
    width: 210,
    backgroundColor: "#78BFEF",
    color: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonContainerThree: {
    width: 210,
    backgroundColor: "#78EFE4",
    color: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
