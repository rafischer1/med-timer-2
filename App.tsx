import React, {  useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Tabs from "./navigation/MainTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { lightTheme$ } from "./stores/theme-toggle.store";

export default function App() {
  console.log("%c App Loading - Test", "color: pink;");
  const [lightTheme, setLightTheme] = useState(true);

  lightTheme$.subscribe((active) => {
    if (active !== lightTheme) setLightTheme(() => active);
  });

  return (
    <Provider store={store}>
      <SafeAreaView
        style={lightTheme ? styles.container : styles.darkContainer}
      >
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
  darkContainer: {
    height: "100%",
    color: "white",
    backgroundColor: "#333",
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
});
