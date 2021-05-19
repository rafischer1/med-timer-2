import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("%c App Loading - Test", "color: pink;");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Generic Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2d2d",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
