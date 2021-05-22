import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Tabs from "./navigation/MainTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  console.log("%c App Loading - Test", "color: pink;");
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    color: "#333333",
    backgroundColor: "#fff",
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
});
