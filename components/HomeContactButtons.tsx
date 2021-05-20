import { Button, Linking, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";

const HomeContactButtons = () => {
  return (
    <SafeAreaView>
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

export default HomeContactButtons;
