import { Button, Linking, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";

type NavItem = {
  title: string;
  url: string;
  styleSector: {
    width: number;
    backgroundColor: string;
    color: string;
    borderRadius: number;
    marginBottom: number;
  };
};

const HomeContactButtons = () => {
  const navItems: NavItem[] = [
    {
      title: "Github Repo",
      url: "https://github.com/rafischer1/med-timer-2",
      styleSector: styles.buttonContainerThree,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/robert-a-fischer/",
      styleSector: styles.buttonContainerOne,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/peacemang/",
      styleSector: styles.buttonContainerTwo,
    },
  ];
  return (
    <SafeAreaView>
      {navItems.map((link) => {
        return (
          <View style={link.styleSector}>
            <Button
              color={"black"}
              title={link.title}
              onPress={() => navTo({ url: link.url })}
            />
          </View>
        );
      })}
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
