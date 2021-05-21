import React, { useState } from "react";
import { Switch, View, StyleSheet } from "react-native";
import { MontserratText } from "./MontserratText";
import { toggleSoundState } from "../stores/sound-toggle.store";

const ModeSwitch = ({ type, onText, offText }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      switch (type) {
        case "Sound":
          toggleSoundState(!previousState);
          break;
        case "Theme":
          console.log("Theme CHANGE!");
          break;
        case "Timer Style":
          console.log("TIMER STYLE!");
      }
      return !previousState;
    });
  };

  return (
    <View style={styles.container}>
      <MontserratText style={{ fontSize: 24 }}>
        {type}: {isEnabled ? onText : offText}
      </MontserratText>
      <Switch
        trackColor={{ false: "#78EFE4", true: "#78DCEF" }}
        thumbColor={isEnabled ? "#333" : "#333"}
        ios_backgroundColor="#78BFEF"
        onValueChange={toggleSwitch}
        value={!isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default ModeSwitch;
