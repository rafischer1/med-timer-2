import { Button, Linking, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";

type NavItem = {
  title: string;
  url: string;
  styleSector: any[];
};

const HomeContactButtons = () => {
  const navItems: NavItem[] = [
    {
      title: "Github Repo",
      url: "https://github.com/rafischer1/med-timer-2",
      styleSector: [styles.github, styles.button],
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/robert-a-fischer/",
      styleSector: [styles.linkedin, styles.button],
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/peacemang/",
      styleSector: [styles.instagram, styles.button],
    },
  ];
  return (
    <SafeAreaView>
      {navItems.map((link, index) => {
        return (
          <View style={link.styleSector} key={index}>
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
  button: { color: "white", borderRadius: 10, marginBottom: 10, width: 210 },
  linkedin: {
    backgroundColor: "#78DCEF",
  },
  instagram: {
    backgroundColor: "#78BFEF",
  },
  github: {
    backgroundColor: "#78EFE4",
  },
});

export default HomeContactButtons;
